import React from "react";
import DiaryData from "@/app/data/DiaryData";
import Plus from "../background/Plus";
import Link from "next/link";
import NotFound from "@/app/not-found";

interface DiaryDetailProps {
  detailId: string;
}

const DetailDiary: React.FC<DiaryDetailProps> = ({ detailId }) => {
  const detailBlog = DiaryData.find((detail) => detail.id === detailId);

  if (!detailBlog) {
    return (
      <main>
        <section>
          <NotFound />
        </section>
      </main>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center my-4">
      <div className="my-6 self-start mx-4 xl:mx-6 2xl:mx-60">
        <Link
          href="/blogs"
          className="px-6 py-2 bg-black text-white font-ketiga font-extrabold"
        >
          BACK
        </Link>
      </div>

      <div className="w-full md:px-14 lg:px-24 xl:px-36 2xl:px-80">
        <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between">
          <div className="relative">
            <div className="p-4">
              <div className="p-1">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-kedua">
                  {detailBlog.judul}
                </h1>
              </div>

              <div className="p-1">
                <h2 className="text-lg lg:text-xl xl:text-2xl font-pertama">
                  {detailBlog.subJudul}
                </h2>
              </div>
            </div>

            <div className="absolute top-2 left-2 lg:-left-2">
              <p className="text-4xl font-ketiga">{"/"}</p>
            </div>

            <div
              className="h-10 md:h-14 flex items-center justify-center"
              style={{ backgroundImage: `url('/bg/topography.svg')` }}
            ></div>
          </div>

          <div className="relative">
            <div className="p-4">
              <div className="xl:w-56 xl:h-56 flex items-center justify-center border-l border-b border-black">
                <div className="p-6 text-center">
                  <p className="font-ketiga font-extrabold text-3xl">
                    {detailBlog.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-6 -left-2">
              <div className="w-60 h-24 xl:w-60 xl:h-60 border-t border-r border-black"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <Plus />
      </div>

      <div className="w-full px-8 md:px-14 lg:px-28 xl:px-36 2xl:px-72">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="max-w-xs md:max-w-md p-2 mb-2 md:mb-0">
            <h3 className="text-2xl font-ketiga font-extrabold p-1">01</h3>
            <p className="font-pertama p-1">{detailBlog.desk1}</p>
          </div>

          <div className="max-w-xs md:max-w-md p-2 mt-2 md:mt-0">
            <h4 className="text-2xl font-ketiga font-extrabold p-1">02</h4>
            <p className="font-pertama p-1">{detailBlog.desk2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDiary;
