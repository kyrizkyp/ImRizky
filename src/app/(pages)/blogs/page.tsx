import Plus from "@/app/components/background/Plus";
import Wave from "@/app/components/background/Wave";
import Blog from "@/app/components/blog/Blog";
import Diary from "@/app/components/blog/Diary";
import Gallery from "@/app/components/gallery/Gallery";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "KYRIZKYP - Blogs",
};

const page = () => {
  return (
    <main>
      <section className="mt-4 mb-10">
        <div className="flex items-center justify-center">
          <Blog />
        </div>
      </section>

      <section>
        <Wave />
      </section>

      <section className="my-10">
        <div className="flex items-center justify-center">
          <Diary />
        </div>
      </section>

      <section>
        <Plus />
      </section>

      <section className="mt-10 mb-8">
        <div className="flex flex-col items-center justify-center">
          <div className="hidden xl:block">
            <Gallery batasGambar={8} tampilkanSampul={false} />
          </div>

          <div className="block xl:hidden">
            <Gallery batasGambar={6} tampilkanSampul={false} />
          </div>

          <Link
            href="/gallery"
            className="px-6 py-2 bg-black text-white font-ketiga font-extrabold my-4"
          >
            SHOW ALL
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
