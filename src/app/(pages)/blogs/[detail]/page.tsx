import React from "react";
import DetailDiary from "@/app/components/blog/DetailDiary";

interface DetailBlog {
  detail: string;
}

const Page: React.FC<{ params: DetailBlog }> = ({ params }) => {
  return (
    <main>
      <div>
        <DetailDiary detailId={params.detail} />
      </div>
    </main>
  );
};

export default Page;
