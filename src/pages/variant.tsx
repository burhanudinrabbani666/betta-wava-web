import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import useGetProductsByVariant from "@/module/products/useGetProducts";
import { useParams } from "react-router";

const tagColor: Record<string, string> = {
  competition: "bg-yellow-200",
  gradea: "bg-red-200",
  breeding: "bg-green-200",
};

export default function Variant() {
  const { slug } = useParams();

  const { products, isPending, error } = useGetProductsByVariant(slug);

  if (isPending) return <Spinner className="size-9" />;
  if (error) return <p>Load Products Error: {error}</p>;

  return (
    <div className="h-screen overflow-scroll">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {products?.map((product) => (
          <li
            key={product.id}
            className="max-w-40 self-stretch shadow-xs shadow-neutral-300"
          >
            <img src={product.thumbnailUrl} alt={product.name} />

            <div className="flex flex-col gap-1 p-2">
              <span
                className={cn(
                  "w-fit rounded-2xl px-2 text-xs",
                  tagColor[slug?.split("-").join("") ?? ""],
                )}
              >
                {slug}
              </span>
              <div className="">
                <h1 className="text-sm font-light">{product.name}</h1>
                <span className="text-xs font-medium">
                  Rp: {product.price.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
