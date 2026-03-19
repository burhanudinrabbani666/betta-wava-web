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
};

export type ActionType = { type: "searchToggle" } | { type: "menuToggle" };
