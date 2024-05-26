"use client";

import React, { useEffect } from "react";
import DiaryData from "@/app/data/DiaryData";
import Plus from "../background/Plus";
import Link from "next/link";
import NotFound from "@/app/not-found";
import { IconTimeline } from "@tabler/icons-react";
import Image from "next/image";

interface DiaryDetailProps {
  detailId: string;
}

const DetailDiary: React.FC<DiaryDetailProps> = ({ detailId }) => {
  const detailBlog = DiaryData.find((detail) => detail.id === detailId);

  useEffect(() => {
    if (detailBlog) {
      document.title = `KYRIZKYP - ${detailBlog.judul}`;
    }
  }, [detailBlog]);

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
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
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

              <div className="p-6 text-gray-400">
                <h2 className="text-lg font-ketiga font-extrabold">
                  {detailBlog.status}
                </h2>
              </div>
            </div>

            <div className="absolute top-2 left-2 lg:-left-2">
              <p className="text-4xl font-ketiga">{"/"}</p>
            </div>
          </div>

          <div className="relative">
            <div className="p-4">
              <div className="w-52 h-24 xl:w-56 xl:h-56 flex items-center justify-center border-l border-b border-black">
                <div className="p-6 text-center">
                  <p className="font-ketiga font-extrabold text-2xl">
                    {detailBlog.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-6 -left-2">
              <div className="w-56 h-28 xl:w-60 xl:h-60 border-t border-r border-black"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <Plus />
      </div>

      <div className="w-full px-8 md:px-10 lg:px-16 xl:px-36 2xl:px-80 my-4">
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

      <div className="flex flex-col lg:flex-row items-center justify-center my-10 px-2 md:px-10 lg:px-0 xl:gap-20">
        <div className="p-4">
          {detailBlog.gambar ? (
            <div className="w-[340px] h-52 md:w-full md:h-full">
              <Image
                src={detailBlog.gambar}
                width={500}
                height={300}
                loading="eager"
                quality={100}
                priority
                alt="artwork"
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="relative">
              <div className="w-[300px] h-52 md:w-[500px] md:h-[300px] border-l border-b border-black flex items-center justify-center">
                <div className="p-4 flex flex-col items-center justify-center">
                  <IconTimeline className="w-14 h-14 md:w-24 md:h-24 stroke-[0.5]" />
                  <p className="font-ketiga font-extrabold  text-xl md:text-3xl text-center">
                    BEING WORKED ON
                  </p>
                </div>
              </div>

              <div className="absolute top-6 -left-2 md:-left-4">
                <div className="w-28 h-36 md:w-32 md:h-40 border-t border-l border-black"></div>
              </div>
            </div>
          )}
        </div>

        <div className="block lg:hidden">
          <Plus />
        </div>

        <div className="max-w-md p-4 flex flex-col">
          <div className="p-2">
            <p className="font-pertama text-center lg:text-left">
              {detailBlog.desk3}
            </p>
          </div>

          <div className="p-2 self-center lg:self-start">
            {detailBlog.link ? (
              <Link
                href={detailBlog.link}
                target="_blank"
                className="py-2 px-4 bg-black text-white font-ketiga font-extrabold"
              >
                {detailBlog.btnJudul}
              </Link>
            ) : (
              <span className="py-2 px-4 bg-gray-400 text-white font-ketiga font-extrabold">
                {detailBlog.btnJudul}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDiary;
