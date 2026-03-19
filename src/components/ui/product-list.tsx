import type { ProductsSchema } from "@/module/schema";
import ProductCard from "./product-card";

export default function ProductList({
  products,
}: {
  products: ProductsSchema;
}) {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
}
