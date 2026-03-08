import getProducts from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

export default function useProducts() {
  const {
    data: products,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, isPending, error };
}
