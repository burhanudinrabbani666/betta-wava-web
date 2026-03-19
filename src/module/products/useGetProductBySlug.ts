import { $api } from "../common/api";

export default function useGetProductBySlug(slug: string | undefined) {
  const {
    data: product,
    isPending,
    error,
  } = $api.useQuery("get", "/products/{slug}", {
    params: { path: { slug: slug! } },
  });

  return { product, isPending, error };
}
