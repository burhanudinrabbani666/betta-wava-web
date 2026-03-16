import { Button } from "@/button";
import { memo } from "react";

type ItemCounter = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  stockLevel: number;
};

const ItemCounter = memo(
  ({ count, onIncrement, onDecrement, stockLevel }: ItemCounter) => {
    return (
      <div className="flex w-full max-w-20 items-center justify-between">
        <Button
          variant="ghost"
          onClick={onDecrement}
          disabled={count <= 1 ? true : false}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          variant="ghost"
          onClick={onIncrement}
          disabled={count >= stockLevel ? true : false}
        >
          +
        </Button>
      </div>
    );
  },
);

export default ItemCounter;
