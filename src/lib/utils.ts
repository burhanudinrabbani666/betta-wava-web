import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const variant = [
  {
    title: "Competition Grade",
    description:
      "Show-quality betta with outstanding color, form, and symmetry.",
  },
  {
    title: "Grade A",
    description:
      "Beautiful and healthy betta, perfect for collectors and hobbyists.",
  },
  {
    title: "Breeding",
    description:
      "Strong genetics betta, perfect for breeding and line development.",
  },
];
