import { $api } from "../common/api";

export default function useGetProducts() {
  const {
    data: products,
    isPending,
    error,
  } = $api.useQuery("get", "/products");

  return { products, isPending, error };
}
