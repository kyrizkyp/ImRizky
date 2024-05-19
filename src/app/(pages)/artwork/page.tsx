import Artwork from "@/app/components/artwork/Artwork";
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
    </main>
  );
};

export default page;
