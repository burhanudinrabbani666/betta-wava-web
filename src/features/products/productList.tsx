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
import { Spinner } from "@/components/ui/spinner";

function ProductList() {
  const { products, isPending, error } = useProducts();

  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />;
      </div>
    );
  }
  if (error) return;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      {products.map((product: Product) => (
        <Link key={product.id} to={`/product/${product.slug}`}>
          <Card className="max-w-48 shadow-lg">
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
