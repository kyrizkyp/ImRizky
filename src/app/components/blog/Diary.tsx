import React from "react";
import DiaryData from "@/app/data/DiaryData";
import Link from "next/link";

const Diary = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4 my-2 text-center">
        <h2 className="font-kedua font-extrabold text-3xl">DAILY STORY</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xl:gap-16 px-2 my-2">
        {DiaryData.map((blog, urutan) => (
          <Link href={`/blogs/${blog.id}`} key={urutan}>
            <div className="p-2 border border-black">
              <div className="p-1">
                <h2>{blog.judul}</h2>
              </div>

              <div className="max-w-xs p-1">
                <p>{blog.subJudul}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Diary;
