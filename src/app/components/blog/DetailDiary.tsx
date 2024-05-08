import React from "react";
import DiaryData from "@/app/data/DiaryData";

interface DiaryDetailProps {
  detailId: string;
}

const DetailDiary: React.FC<DiaryDetailProps> = ({ detailId }) => {
  const detailBlog = DiaryData.find((detail) => detail.id === detailId);

  if (!detailBlog) {
    return (
      <main className="flex items-center justify-center">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1>test</h1>
          </div>
        </section>
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4">
        <div>
          <h1>{detailBlog.judul}</h1>
        </div>

        <div>
          <h2>{detailBlog.subJudul}</h2>
        </div>

        <div>
          <p>{detailBlog.desk1}</p>
        </div>

        <div>
          <p>{detailBlog.desk2}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailDiary;
