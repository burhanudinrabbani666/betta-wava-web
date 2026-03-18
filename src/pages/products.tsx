import ProductList from "@/components/ui/product-list";
import { Spinner } from "@/components/ui/spinner";
import { useHeader } from "@/context/header/useheader";
import useGetProducts from "@/module/products/useGetProduct";
import { useEffect } from "react";

export default function Products() {
  const { products, isPending, error } = useGetProducts();
  const { dispatch } = useHeader();

  useEffect(() => {
    dispatch({ type: "products", payload: products });
  }, [products, dispatch]);

  if (error) return;
  if (isPending) return <Spinner />;

  return (
    <div className="flex min-h-screen justify-center bg-neutral-50">
      <div className="h-screen w-full max-w-2xl overflow-scroll px-4 py-6">
        <ProductList />
      </div>
    </div>
  );
}
