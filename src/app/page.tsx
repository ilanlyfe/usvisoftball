import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import News from "@/components/news"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <Hero />
      <News />
      <Footer />
    </main>
  );
}
