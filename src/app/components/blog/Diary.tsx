"use client";
import React, { useState, useEffect } from "react";
import DiaryData from "@/app/data/DiaryData";
import Link from "next/link";
import BlogBlank from "../blank/BlogBlank";

const itemPerHalaman = 4;

const Diary = () => {
  const [halamanSekarang, mengaturHalamanSekarang] = useState(1);

  useEffect(() => {
    const urlHalaman = new URLSearchParams(window.location.search).get("page");
    if (urlHalaman) {
      mengaturHalamanSekarang(parseInt(urlHalaman));
    }
  }, []);

  useEffect(() => {
    const urlBaru = new URL(window.location.href);
    if (halamanSekarang === 1) {
      urlBaru.searchParams.delete("page");
    } else {
      urlBaru.searchParams.set("page", halamanSekarang.toString());
    }
    window.history.pushState({}, "", urlBaru);
  }, [halamanSekarang]);

  const totalHalaman = Math.ceil(DiaryData.length / itemPerHalaman);

  const handlePageChange = (halaman: number) => {
    mengaturHalamanSekarang(halaman);
  };

  const dataSaatIni = DiaryData.slice(
    (halamanSekarang - 1) * itemPerHalaman,
    halamanSekarang * itemPerHalaman
  );

  const isDataEmpty = DiaryData.every((item) =>
    Object.values(item).every(
      (value) => typeof value === "string" && value.trim() === ""
    )
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4 my-2 text-center">
        <h1 className="font-kedua font-extrabold text-3xl">MY NOTES</h1>
        <p className="font-pertama p-2">
          I jot down inspirations or stories here.
        </p>
      </div>

      {isDataEmpty ? (
        <main>
          <section>
            <BlogBlank />
          </section>
        </main>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xl:gap-16 px-4 my-2">
            {dataSaatIni.map((blog, urutan) => (
              <Link href={`/blogs/${blog.id}`} key={urutan}>
                <div className="p-2 border border-black hover:opacity-50">
                  <div className="p-1">
                    <h2 className="font-ketiga font-extrabold text-md">
                      {blog.judul}
                    </h2>
                  </div>

                  <div className="max-w-xs p-1">
                    <p className="font-pertama text-sm">{blog.subJudul}</p>
                  </div>

                  <div className="flex py-2">
                    <p className="px-2 py-[0.5px] bg-black font-ketiga text-sm text-white">
                      {blog.status}
                    </p>
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
        </>
      )}
    </div>
  );
};

export default Diary;
