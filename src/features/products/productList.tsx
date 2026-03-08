import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useProducts from "./useProducts";
import type { Product } from "@/schema";
import { Link } from "react-router";

function ProductList() {
  const { products, isPending, error } = useProducts();

  if (isPending) return;
  if (error) return;

  return (
    <div className="mx-2 grid grid-cols-2 gap-4">
      {products.map((product: Product) => (
        <Link to={`/product/${product.slug}`}>
          <Card className="min-w-48 shadow-lg">
            <img
              src={product.thumbnailUrl}
              alt={product.name}
              className="h-full w-full"
            />
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.sku}</CardDescription>
            </CardHeader>
            <CardContent>
              <span>
                {product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
