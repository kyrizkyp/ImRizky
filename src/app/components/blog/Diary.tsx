"use client";
import React, { useState } from "react";
import DiaryData from "@/app/data/DiaryData";
import Link from "next/link";

const itemPerHalaman = 4;

const Diary = () => {
  const [halamanSekarang, mengaturHalamanSekarang] = useState(1);

  const totalHalaman = Math.ceil(DiaryData.length / itemPerHalaman);

  const handlePageChange = (halaman: React.SetStateAction<number>) => {
    mengaturHalamanSekarang(halaman);
  };

  const dataSaatIni = DiaryData.slice(
    (halamanSekarang - 1) * itemPerHalaman,
    halamanSekarang * itemPerHalaman
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4 my-2 text-center">
        <h1 className="font-kedua font-extrabold text-3xl">CATATAN SAYA</h1>
        <p className="font-pertama p-2">
          Saya mencatat rencana atau inspirasi di sini.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xl:gap-16 px-4 my-2">
        {dataSaatIni.map((blog, urutan) => (
          <Link href={`/blogs/${blog.id}`} key={urutan}>
            <div className="p-2 border border-black">
              <div className="p-1">
                <h2 className="font-ketiga font-extrabold text-lg">
                  {blog.judul}
                </h2>
              </div>
              <div className="max-w-xs p-1">
                <p className="font-pertama">{blog.subJudul}</p>
              </div>
              <div className="p-2">
                <p className="font-ketiga text-sm">{blog.status}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center my-4">
        {Array.from({ length: totalHalaman }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`m-2 ${
              halamanSekarang === i + 1 ? "bg-black" : "bg-gray-400"
            }`}
          >
            <div className="px-4 py-2">
              <p className="font-kedua text-white">{i + 1}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Diary;
