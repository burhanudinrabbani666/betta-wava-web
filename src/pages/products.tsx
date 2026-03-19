import ProductList from "@/components/ui/product-list";
import { Spinner } from "@/components/ui/spinner";
import useGetProducts from "@/module/products/useGetProduct";

export default function Products() {
  const { products, isPending, error } = useGetProducts();


  if (error) return;
  if (isPending) return <Spinner />;
  if(!products) {
    return <div className="flex justify-center items-center">
      <span>Something Wrong! Failed to fetch Products from server</span>
    </div>
  }

  return (
    <div className="flex min-h-screen justify-center bg-neutral-50">
      <div className="h-screen w-full max-w-2xl overflow-scroll px-4 py-6">
        <ProductList products={products} />
      </div>
    </div>
  );
}
