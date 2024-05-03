import Link from "next/link";
import Square from "./components/background/Square";
import Gallery from "./components/gallery/Gallery";
import Expression from "./components/home/Expression";
import Hero from "./components/home/Hero";
import IPage from "./components/home/IPage";
import Me from "./components/home/Me";
import MyQuote from "./components/home/MyQuote";

export default function Home() {
  return (
    <main>
      <section className="py-4 sm:py-6 md:py-12">
        <div className="relative flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:-space-x-40 xl:space-x-20">
            <div className="order-2 lg:order-1">
              <Hero />
            </div>

            <div className="order-1 lg:order-2 lg:-z-10 xl:z-0">
              <Me />
            </div>
          </div>

          <div className="absolute lg:left-40 lg:top-28 xl:top-24 xl:left-10 -z-40">
            <Square />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-4 sm:py-6 md:py-12">
        <div className="flex items-center justify-center">
          <IPage />
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-4 sm:py-6 md:py-12">
        <div className="flex items-center justify-center">
          <Expression />
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-4 sm:py-6 md:py-12">
        <div className="flex flex-col items-center justify-center">
          <Gallery batasGambar={6} />

          <Link
            href="/gallery"
            className="px-6 py-2 bg-black text-white font-ketiga font-extrabold my-4"
          >
            SHOW ALL
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-4 sm:py-6 md:py-12">
        <div className="flex items-center justify-center">
          <MyQuote />
        </div>
      </section>
    </main>
  );
}
