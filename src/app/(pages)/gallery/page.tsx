import Gallery from "@/app/components/gallery/Gallery";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <section className="max-w-7xl mx-auto py-4 sm:py-6 md:py-12">
        <div className="flex items-center justify-center">
          <Gallery batasGambar={null} />
        </div>
      </section>
    </main>
  );
};

export default page;
