import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import ProductShowcase from "@/components/ProductShowcase";
import IngredientMap from "@/components/IngredientMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ProcessSection />
      <IngredientMap />
      <ProductShowcase />
    </main>
  );
}
