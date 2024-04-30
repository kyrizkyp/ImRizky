import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="py-6 md:pt-14">
        <Hero />
      </section>
    </main>
  );
}
