import { useHeader } from "@/context/header/useheader";
import ProductCard from "./product-card";

export default function ProductList() {
  const { products } = useHeader();

  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
}
