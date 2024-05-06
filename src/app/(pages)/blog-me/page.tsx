import Blog from "@/app/components/blog/Blog";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="max-w-7xl mx-auto py-4 md:py-12">
        <div className="flex items-center justify-center">
          <Blog />
        </div>
      </section>
    </main>
  );
};

export default page;
