import type { ProductsSchema } from "@/module/schema";

export type ProductData = {
  id: string;
  name: string;
  thumbnailUrl: string;
  price: number;
  quantity: number;
};

export type CartTemp = {
  products: ProductData[];
  totalPrice: number;
};

export type IntialStateType = {
  searchOpen: boolean;
  menuOpen: boolean;
  products: ProductsSchema | undefined;
  cartTemp: CartTemp | undefined;
};

export type ActionType =
  | { type: "searchToggle" }
  | { type: "menuToggle" }
  | { type: "products"; payload: ProductsSchema | undefined }
  | { type: "cart"; payload: ProductData };