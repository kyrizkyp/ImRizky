import Gallery from "@/app/components/gallery/Gallery";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="my-10 md:my-12 lg:my-16 xl:my-20">
        <div className="flex items-center justify-center">
          <Gallery batasGambar={null} tampilkanSampul={true} />
        </div>
      </section>
    </main>
  );
};

export default page;
