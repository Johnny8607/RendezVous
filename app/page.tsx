import CardDemo from "@/components/card-demo";
import { NavigationMenuDemo } from "@/components/navigation-menu";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <CardDemo/>
        <NavigationMenuDemo/>
      </div>
    </section>
  );
}
