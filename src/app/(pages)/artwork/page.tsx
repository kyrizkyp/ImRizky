import Artwork from "@/app/components/artwork/Artwork";
import Work from "@/app/components/artwork/Work";
import Plus from "@/app/components/background/Plus";
import React from "react";

export const metadata = {
  title: "KYRIZKYP - Artwork",
};

const page = () => {
  return (
    <main>
      <section className="mt-4 mb-8">
        <div className="flex items-center justify-center">
          <Artwork />
        </div>
      </section>

      <section>
        <Plus />
      </section>

      <section className="my-10">
        <div className="flex items-center justify-center">
          <Work />
        </div>
      </section>
    </main>
  );
};

export default page;
