import type { Product } from "@/schema";

export default async function getProducts() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);

    const products: Product[] = await response.json();

    return products;
  } catch (error) {
    console.log(error);
  }
}
