type Variant = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  stockLevel: number;
  sku: string;
  thumbnailUrl: string;
  imagesUrls: string[];
  variantId: string;
  createdAt: string;
  updatedAt: string;
  variant: Variant;
};
