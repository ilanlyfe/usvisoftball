import Hero from "@/components/hero";
import News from "@/components/news";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Hero />
      <News />
    </main>
  );
}
