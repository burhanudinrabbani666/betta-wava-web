import { $api } from "../common/api";

export default function useGetProductsByVariant(slug: string | undefined) {
  const {
    data: products,
    isPending,
    error,
  } = $api.useQuery("get", "/variant/{slug}", {
    params: { path: { slug: slug! } },
  });

  return { products, isPending, error };
}
