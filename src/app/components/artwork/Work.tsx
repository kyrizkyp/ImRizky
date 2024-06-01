"use client";

import React, { useState } from "react";

const karya = [
  {
    judul: "SURABAYA DEV",
    deskripsi:
      "SurabayaDev, is an IT community with the theme of technology education in synergy and collaboration.",
    gambar: "/artwork/sbydev.png",
  },
];

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(karya[0].gambar);
  const [activeIndex, setActiveIndex] = useState(0);

  const klikAktif = (image: string, index: number) => {
    setSelectedImage(image);
    setActiveIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="p-2 text-center mb-4">
        <h1 className="font-kedua font-extrabold text-3xl">SNIPPET ARTWORK</h1>

        <p className="p-2 font-pertama">Artwork that I have done.</p>
      </div>

      <div className="w-full px-4 md:px-10 xl:px-24 2xl:px-64">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-4">
          <div className="space-y-4">
            {karya.map((activity, index) => (
              <div
                key={index}
                className={`max-w-lg border border-black p-2 cursor-pointer rounded-lg ${
                  activeIndex === index ? "" : ""
                }`}
                onClick={() => klikAktif(activity.gambar, index)}
              >
                <div className="flex items-center">
                  <div className="p-2">
                    <h2 className="p-1 font-ketiga font-extrabold text-lg">
                      {activity.judul}
                    </h2>

                    <p className="p-1 font-pertama">{activity.deskripsi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[300px] h-[150px] xl:w-[400px] xl:h-[250px] mt-10 md:mt-0">
            <img
              src={selectedImage}
              alt="artwork"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
