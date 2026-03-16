import { cn, tagColor } from "@/lib/utils";
import type { ProductSchema } from "@/module/schema";
import { Link } from "react-router";

type ProductCard = {
  product: ProductSchema;
};

export default function ProductCard({ product }: ProductCard) {
  if (!product || !tagColor) return null;

  return (
    // product-card.tsx
    <li
      key={product.id}
      className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-100">
          <img
            src={product.thumbnailUrl}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1.5 p-3">
          <span
            className={cn(
              "w-fit rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide",
              tagColor[product.variant.name?.split(" ").join("") ?? ""],
            )}
          >
            {product.variant.name}
          </span>

          <h1 className="line-clamp-2 text-xs leading-snug font-medium text-neutral-800">
            {product.name}
          </h1>

          <span className="text-xs font-semibold text-neutral-900">
            Rp {product.price.toLocaleString("id-ID")}
          </span>
        </div>
      </Link>
    </li>
  );
}
