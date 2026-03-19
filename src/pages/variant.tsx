import { useParams } from "react-router";

import useGetProductsByVariant from "@/module/products/useGetProducts";

import { Spinner } from "@/components/ui/spinner";
import ProductList from "@/components/ui/product-list";

export default function Variant() {
  const { slug } = useParams();
  const { products, isPending, error } = useGetProductsByVariant(slug);

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="size-9" />;
      </div>
    );
  }
  if (error) return <p>Load Products Error: {error}</p>;
  if (!products) {
    return (
      <div className="flex items-center justify-center">
        <span>Something Wrong! Failed to fetch Products from server</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen justify-center bg-neutral-50">
      <div className="h-screen w-full max-w-2xl overflow-scroll px-4 py-6">
        <ProductList products={products} />
      </div>
    </div>
  );
}
