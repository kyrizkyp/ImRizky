import React from "react";
import HalamanData from "@/app/data/HalamanData";
import SampulData from "@/app/data/SampulData";

const Blog = () => {
  const fotoBlog = HalamanData.find((data) => data.link === "/blogs")?.foto;

  const sampulKiri = SampulData.find((data) => data.judul === "kiri")?.foto;

  const sampulKanan = SampulData.find((data) => data.judul === "kanan")?.foto;

  const sampulBlog = [sampulKiri, fotoBlog, sampulKanan];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full px-4 xl:px-24 2xl:px-72">
        <div className="flex items-center justify-between gap-2 md:gap-4 xl:gap-0">
          {sampulBlog.map((sampul, urutan) => (
            <div
              className="w-full h-full xl:w-[350px] xl:h-[750px]"
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

      <div className="w-full px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-80">
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
    </div>
  );
};

export default Blog;
