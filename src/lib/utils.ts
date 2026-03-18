import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const variant: {
  path: string;
  title: string;
  image: string;
  description: string;
}[] = [
  {
    path: "/variant/competition",
    title: "Competition",
    image: "comp-grade",
    description:
      "Show-quality betta with outstanding color, form, and symmetry.",
  },
  {
    path: "/variant/grade-a",
    title: "Grade A",
    image: "grade-a",
    description:
      "Beautiful and healthy betta, perfect for collectors and hobbyists.",
  },
  {
    path: "/variant/breeding",
    title: "Breeding",
    image: "breeding",
    description:
      "Strong genetics betta, perfect for breeding and line development.",
  },
  {
    path: "/products",
    title: "All products",
    image: "products",
    description: "See all Beutifull betta already for adopt...",
  },
];

export const colors = [
  "Multicolor",
  "Bluerim",
  "Avatar",
  "Two tone",
  "Blue tone",
  "Super Red",
  "Royal Blue",
  "Super Black",
  "Super Yellow",
  "Super White",
  "Red Fccp",
  "Yellow Fccp",
  "Alien Green",
  "Alien Blue",
  "Alien Copper",
];

export const tagColor: Record<string, string> = {
  competition: "bg-yellow-200",
  gradea: "bg-red-200",
  breeding: "bg-green-200",
};
