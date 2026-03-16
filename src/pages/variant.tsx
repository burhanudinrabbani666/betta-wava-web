import { useParams } from "react-router";

import useGetProductsByVariant from "@/module/products/useGetProducts";

import ProductCard from "@/components/ui/product-card";
import { Spinner } from "@/components/ui/spinner";

// ----------------------------------------------------------------------------

export default function Variant() {
  const { slug } = useParams();

  const { products, isPending, error } = useGetProductsByVariant(slug);

  if (isPending) return <Spinner className="size-9" />;
  if (error) return <p>Load Products Error: {error}</p>;

  return (
    <div className="h-screen overflow-scroll">
      <ul className="flex flex-wrap items-center gap-4">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
