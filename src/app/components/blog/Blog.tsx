import React from "react";
import QuoteData from "@/app/data/QuoteData";
import DiaryData from "@/app/data/DiaryData";
import Link from "next/link";
import Plus from "../background/Plus";
import Wave from "../background/Wave";

const Blog = () => {
  const sampulBlog = [
    "https://fastly.picsum.photos/id/1031/450/800.jpg?hmac=_kCrMGQbOzYIo6Wa8ldrZpoNJeRKtRwigzN2mhsFoDg",

    "https://fastly.picsum.photos/id/907/450/800.jpg?hmac=gvL8sb4Dlt2h1pgn59onT0pf-_KUQ_FAluzrA_oYWf0",

    "https://fastly.picsum.photos/id/842/450/800.jpg?hmac=pq7l4koxScV85cmKrFgCIfOyVPqBcZpE01giefemM4Q",
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-72">
        <div className="flex items-center justify-between">
          {sampulBlog.map((sampul, urutan) => (
            <div
              className="w-[106px] h-52 md:w-48 md:h-72 lg:w-64 lg:h-[450px] xl:w-[350px] xl:h-[750px]"
              key={urutan}
            >
              <img
                src={sampul}
                alt="Me"
                className="object-cover w-full h-full -z-10"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-80 mb-4">
        <div className="self-start flex items-center">
          <div className="p-2 text-center">
            <h1 className="font-kedua font-extrabold text-3xl">BLOGS</h1>
          </div>

          <div className="relative p-4">
            <div className="max-w-md p-4 border-l border-black">
              <p className="font-pertama">
                I recorded all the activities, whether ideas, quotes or about
                joys or sorrows here.
              </p>
            </div>

            <div className="w-6 h-16 border-l border-t border-black absolute left-2 top-6"></div>
          </div>
        </div>
      </div>

      <div>
        <Plus />
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-col items-center justify-center">
          <div className="p-4 my-2 text-center">
            <h2 className="font-kedua font-extrabold text-3xl">QUOTES</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
            {QuoteData.map((quote, urutan) => (
              <div className="p-4" key={urutan}>
                <h1 className="font-ketiga font-extrabold text-lg">
                  {quote.judul}
                </h1>

                <div className="max-w-md">
                  <p className="font-pertama">{quote.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Wave />

        <div className="flex flex-col items-center justify-center">
          <div className="p-4 my-4 text-center">
            <h2 className="font-kedua font-extrabold text-3xl">DAILY STORY</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {DiaryData.map((blog, urutan) => (
              <Link href={`/blogs/${blog.id}`} key={urutan} className="p-2">
                <div className="p-2 border border-black">
                  <div className="p-2">
                    <h2>{blog.judul}</h2>
                  </div>

                  <div className="max-w-xs p-2">
                    <p>{blog.subJudul}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
