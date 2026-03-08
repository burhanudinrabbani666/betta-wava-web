import ColorNav from "@/components/ui/colorNav";
import Hero from "@/components/ui/hero";
import VariantNav from "@/components/ui/variantNav";
import ProductList from "@/features/products/productList";

function Dashboard() {
  return (
    <div className="space-y-5">
      <Hero />
      <div className="mx-2 space-y-5">
        <VariantNav />
        <ColorNav />
        <ProductList />
      </div>
    </div>
  );
}

export default Dashboard;
