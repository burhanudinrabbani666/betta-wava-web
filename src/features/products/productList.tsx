import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/schema";
import { Link } from "react-router";
import { Spinner } from "@/components/ui/spinner";
import { useQuery } from "@tanstack/react-query";
import getProducts from "@/services/apiProducts";

function ProductList() {
  const {
    data: products,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

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
      {products &&
        products.map((product) => (
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
