import { Button } from "@/button";
import { memo } from "react";

const ItemCounter = memo(
  ({
    count,
    onIncrement,
    onDecrement,
  }: {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
  }) => {
    return (
      <div className="flex w-full max-w-20 items-center justify-between">
        <Button variant="ghost" onClick={onDecrement}>
          -
        </Button>
        <span>{count}</span>
        <Button variant="ghost" onClick={onIncrement}>
          +
        </Button>
      </div>
    );
  },
);

export default ItemCounter;
