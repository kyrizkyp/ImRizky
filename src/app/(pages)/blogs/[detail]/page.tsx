import React from "react";
import DetailDiary from "@/app/components/blog/DetailDiary";
import Link from "next/link";

interface DetailBlog {
  detail: string;
}

const Page: React.FC<{ params: DetailBlog }> = ({ params }) => {
  return (
    <main>
      <section className="my-4">
        <div className="flex flex-col items-center justify-center">
          <div className="my-2 self-start mx-4 xl:mx-6 2xl:mx-60">
            <Link
              href="/blogs"
              className="px-6 py-2 bg-black text-white font-ketiga font-extrabold"
            >
              BACK
            </Link>
          </div>

          <DetailDiary detailId={params.detail} />
        </div>
      </section>
    </main>
  );
};

export default Page;
