import { useForm, type SubmitHandler } from "react-hook-form";

import { useHeader } from "@/context/header/useheader";
import { Input } from "./input";
import { Button } from "@/button";
import { ArrowLeftIcon } from "../icons/heroicons-arrow-left";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "../icons/heroicons-magnifying-glass";
import { useState } from "react";

type HandleSearch = {
  productName: string;
};

export default function Search() {
  const [formFocus, setFormFocus] = useState(false);
  const { register, handleSubmit, formState } = useForm<HandleSearch>();
  const { dispatch, searchOpen } = useHeader();

  const handleSearch: SubmitHandler<HandleSearch> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex w-full items-center justify-between gap-2 px-4 py-2">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => dispatch({ type: "searchToggle" })}
        >
          <ArrowLeftIcon />
        </Button>

        <form
          method="post"
          onSubmit={handleSubmit(handleSearch)}
          className={cn(
            "flex h-10 flex-1 items-center rounded-xl border border-neutral-200",
            formFocus && "focus: focus: outline-1 outline-gray-300",
          )}
        >
          <Button
            size="sm"
            variant="ghost"
            className={cn(formFocus ? "hidden" : "", "text-gray-400")}
          >
            <MagnifyingGlassIcon size={15} />
          </Button>
          <Input
            {...register("productName", { required: true })}
            placeholder="Search Product"
            className="border-0 focus-visible:ring-0"
            type="text"
            onFocus={() => setFormFocus(true)}
            onBlur={() => setFormFocus(false)}
          />
        </form>
      </div>
    </div>
  );
}
