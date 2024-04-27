import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/bg/topography.svg')` }}
    >
      <section className="py-6 md:pt-14">
        <Hero />
      </section>
    </main>
  );
}
