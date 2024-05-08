import Blog from "@/app/components/blog/Blog";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="my-4">
        <div className="flex items-center justify-center">
          <Blog />
        </div>
      </section>
    </main>
  );
};

export default page;
