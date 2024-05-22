import Plus from "@/app/components/background/Plus";
import Blog from "@/app/components/blog/Blog";
import Diary from "@/app/components/blog/Diary";
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

      <section className="my-10">
        <div className="flex items-center justify-center">
          <Diary />
        </div>
      </section>
    </main>
  );
};

export default page;
