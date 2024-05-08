import Gallery from "@/app/components/gallery/Gallery";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="my-4">
        <div className="flex items-center justify-center">
          <Gallery batasGambar={null} tampilkanSampul={true} />
        </div>
      </section>
    </main>
  );
};

export default page;
