import ColorNav from "@/components/ui/colorNav";
import Hero from "@/components/ui/hero";
import VariantNav from "@/components/ui/variantNav";
import ProductList from "@/features/products/productList";
import getProducts from "@/services/apiProducts";

function Dashboard() {
  getProducts();
  return (
    <div>
      <Hero />
      <VariantNav />
      <ColorNav />
      <ProductList />
    </div>
  );
}

export default Dashboard;
