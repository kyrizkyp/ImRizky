import Link from "next/link";
import Plus from "./components/background/Plus";
import TopLeft from "./components/background/TopLeft";
import Wave from "./components/background/Wave";
import Gallery from "./components/gallery/Gallery";

import Expression from "./components/home/Expression";
import IPage from "./components/home/IPage";
import IconLink from "./components/home/IconLink";
import MyQuote from "./components/home/MyQuote";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main>
      <section className="mt-0 mb-36 md:mt-12 md:mb-40 lg:mt-16 lg:mb-36 xl:my-20">
        <div className="flex items-center justify-center relative">
          <div className="absolute lg:left-14 lg:top-20 xl:top-12 xl:left-20 2xl:top-10 2xl:left-[310px]">
            <TopLeft />
          </div>

          <div className="relative">
            <Hero />
          </div>

          <div className="absolute -bottom-[118px] left-12 md:bottom-24 md:left-12 lg:-bottom-24 lg:left-8 xl:bottom-10 xl:left-12 2xl:bottom-28 2xl:left-56">
            <IconLink />
          </div>
        </div>
      </section>

      <section>
        <Plus />
      </section>

      <section className="my-10 md:my-12 lg:my-16 xl:my-20">
        <div className="flex items-center justify-center">
          <IPage />
        </div>
      </section>

      <section className="my-10 md:my-12 lg:my-16 xl:my-20">
        <div className="flex items-center justify-center">
          <Expression />
        </div>
      </section>

      <section>
        <Wave />
      </section>

      <section>
        <Plus />
      </section>

      <section className="my-10 md:my-12 lg:my-16 xl:my-20">
        <div className="flex flex-col items-center justify-center">
          <Gallery batasGambar={null} tampilkanSampul={false} />

          <Link
            href="/gallery"
            className="px-6 py-2 bg-black text-white font-ketiga font-extrabold my-4"
          >
            SHOW ALL
          </Link>
        </div>
      </section>

      <section className="my-10 md:my-12 lg:my-16 xl:my-20">
        <div className="flex items-center justify-center">
          <MyQuote />
        </div>
      </section>
    </main>
  );
}
