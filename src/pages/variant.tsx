import { useParams } from "react-router";

import useGetProductsByVariant from "@/module/products/useGetProducts";

import { Spinner } from "@/components/ui/spinner";
import ProductList from "@/components/ui/product-list";
import { useHeader } from "@/context/header/useheader";
import { useEffect } from "react";

// ----------------------------------------------------------------------------

export default function Variant() {
  const { slug } = useParams();
  const { products, isPending, error } = useGetProductsByVariant(slug);
  const { dispatch } = useHeader();

  useEffect(() => {
    dispatch({ type: "products", payload: products });
  }, [products, dispatch]);

  if (isPending) return <Spinner className="size-9" />;
  if (error) return <p>Load Products Error: {error}</p>;

  return (
    <div className="flex min-h-screen justify-center bg-neutral-50">
      <div className="h-screen w-full max-w-2xl overflow-scroll px-4 py-6">
        <ProductList />
      </div>
    </div>
  );
}
