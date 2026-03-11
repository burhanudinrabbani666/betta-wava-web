import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const variant = [
  {
    title: "Competition Grade",
    image: "comp-grade",
    description:
      "Show-quality betta with outstanding color, form, and symmetry.",
  },
  {
    title: "Grade A",
    image: "grade-a",
    description:
      "Beautiful and healthy betta, perfect for collectors and hobbyists.",
  },
  {
    title: "Breeding",
    image: "breeding",
    description:
      "Strong genetics betta, perfect for breeding and line development.",
  },
];
