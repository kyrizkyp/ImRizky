import Hero from "./components/home/Hero";
import Me from "./components/home/Me";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="py-4 sm:py-6 md:pt-12">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:-space-x-40 xl:space-x-20">
          <div className="order-2 lg:order-1">
            <Hero />
          </div>

          <div className="order-1 lg:order-2 lg:-z-10 xl:z-0">
            <Me />
          </div>
        </div>
      </section>
    </main>
  );
}
