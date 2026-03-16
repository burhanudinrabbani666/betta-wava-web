import { useForm, type SubmitHandler } from "react-hook-form";

import { useHeader } from "@/context/header/useheader";
import { Input } from "./input";
import { Button } from "@/button";
import { ArrowLeftIcon } from "../icons/heroicons-arrow-left";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "../icons/heroicons-magnifying-glass";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
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
  const { dispatch, searchOpen } = useHeader();
  const navigate = useNavigate();

  const handleSearch: SubmitHandler<HandleSearch> = (data) => {
    dispatch({ type: "searchToggle" });
    navigate(`/search?q=${data.productName}`);
  };

  function handleSearchRecommendation(product: string) {
    dispatch({ type: "searchToggle" });
    navigate(`/search?q=${product}`);
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 flex flex-col bg-neutral-50 transition-transform duration-300 ease-out",
        searchOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-neutral-200 px-3 py-3 sm:px-6">
        <Button
          size="icon"
          variant="ghost"
          className="shrink-0"
          onClick={() => dispatch({ type: "searchToggle" })}
        >
          <ArrowLeftIcon />
        </Button>

        <div className="relative flex-1">
          <form
            method="post"
            onSubmit={handleSubmit(handleSearch)}
            className={cn(
              "flex h-10 items-center rounded-xl border border-neutral-200 bg-white transition-all",
              formFocus && "border-neutral-400 ring-1 ring-neutral-300",
            )}
          >
            <Button
              size="sm"
              variant="ghost"
              className="text-neutral-400"
              type="submit"
            >
              <MagnifyingGlassIcon size={15} />
            </Button>
            <Input
              {...register("productName", { required: true })}
              placeholder="Search products..."
              className="border-0 bg-transparent text-sm focus-visible:ring-0"
              type="text"
              onFocus={() => setFormFocus(true)}
              onBlur={() => setFormFocus(false)}
            />
          </form>
          {errors.productName && (
            <span className="absolute -bottom-5 left-0 text-xs text-red-500">
              Please enter a search term
            </span>
          )}
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 space-y-8 overflow-y-auto px-4 py-6 sm:px-6">
        {/* Trending */}
        <section className="space-y-3">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
            Trending
          </p>
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2">
              {trendingFish.map((fish) => (
                <CarouselItem
                  key={fish}
                  onClick={() => handleSearchRecommendation(fish)}
                  className="basis-auto cursor-pointer pl-2"
                >
                  <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-100">
                    <MagnifyingGlassIcon size={12} />
                    <span>{fish}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        {/* Search History */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
              Recent
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs text-neutral-400 hover:text-red-500"
            >
              Clear all
            </Button>
          </div>

          <ul className="divide-y divide-neutral-100">
            <li className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <MagnifyingGlassIcon size={14} className="text-neutral-400" />
                <span>Bluerim</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-neutral-400 hover:text-red-500"
              >
                <XMarkIcon />
              </Button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
