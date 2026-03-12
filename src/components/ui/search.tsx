import { useForm, type SubmitHandler } from "react-hook-form";

import { useHeader } from "@/context/header/useheader";
import { Input } from "./input";
import { Button } from "@/button";
import { ArrowLeftIcon } from "../icons/heroicons-arrow-left";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "../icons/heroicons-magnifying-glass";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { TrashIcon } from "../icons/heroicons-trash";
import { XMarkIcon } from "../icons/heroicons-x-mark";

type HandleSearch = {
  productName: string;
};

const trendingFish = [
  "Bluerim",
  "Avatar",
  "Multicolor",
  "SuperRed",
  "Alien",
  "Nemo",
];

export default function Search() {
  const [formFocus, setFormFocus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HandleSearch>();
  const { dispatch } = useHeader();

  const navigate = useNavigate();

  const handleSearch: SubmitHandler<HandleSearch> = (data) => {
    const { productName } = data;

    dispatch({ type: "searchToggle" }); // Close the Search
    navigate(`/search?q=${productName}`);
    return;
  };

  function handleSearchRecomendatio(product: string) {
    dispatch({ type: "searchToggle" }); // Close the Search
    navigate(`/search?q=${product}`);
    return;
  }

  return (
    <div className="flex flex-col gap-6 px-4 py-2">
      <div className="flex w-full items-center justify-between gap-2">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => dispatch({ type: "searchToggle" })}
        >
          <ArrowLeftIcon />
        </Button>

        <div className="relative flex-1">
          <form
            method="post"
            onSubmit={handleSubmit(handleSearch)}
            className={cn(
              "flex h-10 items-center rounded-xl border border-neutral-200",
              formFocus && "focus: focus: outline-1 outline-gray-300",
            )}
          >
            <Button
              size="sm"
              variant="ghost"
              className={cn(formFocus ? "hidden" : "", "text-gray-400")}
              type="submit"
            >
              <MagnifyingGlassIcon size={15} />
            </Button>
            <Input
              {...register("productName", { required: true })}
              placeholder="Search Product"
              className="border-0 text-sm focus-visible:ring-0"
              type="text"
              onFocus={() => setFormFocus(true)}
              onBlur={() => setFormFocus(false)}
            />
          </form>
          {errors.productName && (
            <span className="absolute text-xs text-red-600">Insert query</span>
          )}
        </div>
      </div>

      {/* Search Recomendation */}
      <div className="flex flex-col gap-4">
        <span>Trending</span>
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2">
            {trendingFish.map((fish) => (
              <CarouselItem
                onClick={() => handleSearchRecomendatio(fish)}
                className="basis-auto pl-4 text-center"
              >
                <div className="flex w-fit items-center justify-center gap-1 rounded-xl border border-neutral-200 p-2 text-xs">
                  <MagnifyingGlassIcon size={14} />
                  <span className="">{fish}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Search History */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
          <span>Search History</span>
          <Button variant="ghost">
            <TrashIcon />
          </Button>
        </div>

        <ul>
          <li className="flex items-center justify-between">
            <span>Bluerim</span>
            <Button variant="ghost">
              <XMarkIcon />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
