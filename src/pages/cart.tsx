import { ShoppingBagIcon } from "@/components/icons/heroicons-shopping-bag";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useHeader } from "@/context/header/useheader";

export default function Cart() {
  const { cartTemp } = useHeader();

  if (!cartTemp)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-neutral-50">
        <ShoppingBagIcon className="h-10 w-10 text-neutral-300" />
        <p className="text-xs tracking-widest text-neutral-400 uppercase">
          Your bag is empty
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="border-b border-neutral-200 bg-white px-4 py-4 sm:px-6">
        <h1 className="text-sm font-semibold tracking-widest text-neutral-800 uppercase">
          My Bag ({cartTemp.products.length})
        </h1>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
        {/* Cart Items */}
        <ul className="space-y-3">
          {cartTemp.products.map((cartItem) => (
            <li
              key={cartItem.id}
              className="flex gap-4 rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm"
            >
              {/* Thumbnail */}
              <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src={cartItem.thumbnailUrl}
                  alt={cartItem.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-between">
                <div className="space-y-0.5">
                  <p className="line-clamp-2 text-xs font-medium tracking-widest text-neutral-800 uppercase">
                    {cartItem.name}
                  </p>
                  <p className="text-xs tracking-wide text-neutral-400">
                    Rp {cartItem.price.toLocaleString("id-ID")} ×{" "}
                    {cartItem.quantity}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-neutral-900">
                    Rp{" "}
                    {(cartItem.price * cartItem.quantity).toLocaleString(
                      "id-ID",
                    )}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <div className="mt-6 space-y-3 rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs tracking-widest text-neutral-500 uppercase">
            <span>Subtotal</span>
            <span>Rp {cartTemp.totalPrice.toLocaleString("id-ID")}</span>
          </div>
          <div className="flex items-center justify-between text-xs tracking-widest text-neutral-500 uppercase">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-sm font-semibold tracking-widest text-neutral-900 uppercase">
            <span>Total</span>
            <span>Rp {cartTemp.totalPrice.toLocaleString("id-ID")}</span>
          </div>
        </div>

        {/* Checkout */}
        <div className="mt-4 space-y-2">
          <Button className="h-12 w-full rounded-xl bg-neutral-900 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-neutral-700">
            <ShoppingBagIcon className="mr-2 h-4 w-4" />
            Proceed to Checkout
          </Button>
          <Button
            variant="outline"
            className="h-12 w-full rounded-xl border-neutral-200 text-xs tracking-widest text-neutral-600 uppercase hover:bg-neutral-50"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
