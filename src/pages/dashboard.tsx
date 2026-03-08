import ColorNav from "@/components/ui/colorNav";
import Hero from "@/components/ui/hero";
import VariantNav from "@/components/ui/variantNav";
import getProducts from "@/services/apiProducts";

function Dashboard() {
  getProducts();
  return (
    <div>
      <Hero />
      <VariantNav />
      <ColorNav />
      <div className="">Product list</div>
    </div>
  );
}

export default Dashboard;
