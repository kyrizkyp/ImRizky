import React from "react";
import DetailDiary from "@/app/components/blog/DetailDiary";
import Link from "next/link";

interface DetailBlog {
  detail: string;
}

const Page: React.FC<{ params: DetailBlog }> = ({ params }) => {
  return (
    <main>
      <section className="mt-4 mb-8">
        <div className="flex items-center justify-center">
          <DetailDiary detailId={params.detail} />
        </div>
      </section>
    </main>
  );
};

export default Page;
