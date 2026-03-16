import { cn, tagColor } from "@/lib/utils";
import type { ProductSchema } from "@/module/schema";

type ProductCard = {
  product: ProductSchema;
};

export default function ProductCard({ product }: ProductCard) {
  if (!product || !tagColor) return null;

  return (
    <li
      key={product.id}
      className="max-w-40 self-stretch overflow-hidden rounded-xl shadow-xs shadow-neutral-400"
    >
      <img src={product.thumbnailUrl} alt={product.name} />

      <div className="flex flex-col gap-2 p-2">
        <span
          className={cn(
            "w-fit px-2 text-xs font-extralight",
            tagColor[product.variant.name?.split(" ").join("") ?? ""],
          )}
        >
          {product.variant.name}
        </span>
        <div>
          <h1 className="text-xs font-light">{product.name}</h1>
          <span className="text-xs font-medium">
            Rp: {product.price.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </li>
  );
}
