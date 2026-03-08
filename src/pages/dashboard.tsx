import ColorNav from "@/components/ui/colorNav";
import Hero from "@/components/ui/hero";
import VariantNav from "@/components/ui/variantNav";

function Dashboard() {
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
