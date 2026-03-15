import { cn, tagColor } from "@/lib/utils";
import type { ProductSchema } from "@/module/schema";

type ProductCard = {
  product: ProductSchema;
  slug: string | undefined;
};

export default function ProductCard({ product, slug }: ProductCard) {
  if (!product || !tagColor) return null;

  return (
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
  );
}
