import { useParams } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Share2, RotateCcw, Shield } from "lucide-react";
import { useState } from "react";
import ItemCounter from "@/components/ui/item-counter";
import useGetProductBySlug from "@/module/products/useGetProductBySlug";
import { Spinner } from "@/components/ui/spinner";

export default function Product() {
  const { slug } = useParams();
  const [itemCount, setItemCount] = useState(1);
  const { product, isPending, error } = useGetProductBySlug(slug);

  if (error) return;
  if (isPending) return <Spinner />;
  if (!product) {
    return (
      <div className="flex items-center justify-center">
        <span>Product not found!</span>
      </div>
    );
  }

  const isInStock = product.stockLevel > 0;

  function handleInc() {
    setItemCount((count) => count + 1);
  }

  function handleDec() {
    setItemCount((count) => count - 1);
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Breadcrumb */}
      <div className="text-muted-foreground flex gap-2 border-b px-6 py-3 text-xs tracking-widest uppercase">
        <span>{product.variant.name}</span>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-2 md:grid-cols-2">
        {/* LEFT — Image Carousel */}
        <div className="w-full">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {product.imageUrls.map((url, i) => (
                <CarouselItem key={i}>
                  <div className="aspect-3/4 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={url}
                      alt={`${product.name} ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3" />
            <CarouselNext className="right-3" />
          </Carousel>

          {/* Thumbnail dots */}
          <div className="mt-4 flex justify-center gap-2">
            {product.imageUrls.map((url, i) => (
              <div
                key={i}
                className="h-14 w-12 cursor-pointer overflow-hidden border border-neutral-200 transition-colors hover:border-black"
              >
                <img src={url} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Product Info */}
        <div className="flex flex-col gap-6">
          {/* Variant badge */}
          <div>
            <Badge
              variant="outline"
              className="rounded-none text-xs tracking-widest uppercase"
            >
              {product.variant.name}
            </Badge>
          </div>

          {/* Name & Price */}
          <div>
            <h1 className="text-2xl leading-snug font-light tracking-tight uppercase">
              {product.name}
            </h1>
            <p className="text-muted-foreground mt-1 text-xs tracking-widest">
              SKU: {product.sku}
            </p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-medium tracking-tight">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
          </div>

          <Separator />

          {/* Stock */}
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${isInStock ? "bg-green-500" : "bg-red-400"}`}
            />
            <span className="text-muted-foreground text-xs tracking-widest uppercase">
              {isInStock ? `In Stock (${product.stockLevel})` : "Out of Stock"}
            </span>
          </div>

          {/*  */}
          <ItemCounter
            count={itemCount}
            onIncrement={handleInc}
            onDecrement={handleDec}
            stockLevel={product.stockLevel}
          />

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Button
              className="h-12 w-full rounded-none bg-black text-xs tracking-widest text-white uppercase hover:bg-neutral-800"
              disabled={!isInStock}
              // onClick={handleAddToCart}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Bag
            </Button>
          </div>

          <Separator />

          {/* Meta */}
          <div className="text-muted-foreground grid grid-cols-2 gap-4 text-xs tracking-wide">
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              <span>Free Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </div>
          </div>

          <Separator />

          {/* Product Details */}
          <div className="text-muted-foreground space-y-2 text-xs tracking-wide">
            <p className="text-foreground text-xs font-medium tracking-widest uppercase">
              Product Details
            </p>
            <div className="grid grid-cols-2 gap-y-2">
              <span>SKU</span>
              <span className="text-foreground">{product.sku}</span>
              <span>Variant</span>
              <span className="text-foreground">{product.variant.name}</span>
              <span>Stock</span>
              <span className="text-foreground">
                {product.stockLevel} units
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
