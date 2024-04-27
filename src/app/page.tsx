import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/bg/topography.svg')` }}
    >
      <section className="pt-14 md:pt-14">
        <Hero />
      </section>
    </main>
  );
}
