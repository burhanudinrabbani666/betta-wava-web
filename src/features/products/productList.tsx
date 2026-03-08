import useProducts from "./useProducts";

function ProductList() {
  const { products, isPending, error } = useProducts();

  if (isPending) return;
  if (error) return;

  return <div></div>;
}

export default ProductList;
