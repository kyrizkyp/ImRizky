import React from "react";
import DetailDiary from "@/app/components/blog/DetailDiary";

interface DetailBlog {
  detail: string;
}

const Page: React.FC<{ params: DetailBlog }> = ({ params }) => {
  return (
    <main>
      <section className="my-4">
        <div className="flex items-center justify-center">
          <DetailDiary detailId={params.detail} />
        </div>
      </section>
    </main>
  );
};

export default Page;
