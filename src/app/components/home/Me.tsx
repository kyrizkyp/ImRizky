"use client";
import React, { useState, useEffect } from "react";

const Me = () => {
  const [titikSaatIni, mengaturTitikSaatIni] = useState(0);
  const [slide, setSlide] = useState(false);
  const gambar = [
    "https://fastly.picsum.photos/id/741/500/500.jpg?hmac=QxgEVGp1dAJW9qBYyKqxns1xKcymqoc16utopq1Osck",

    "https://fastly.picsum.photos/id/468/500/500.jpg?hmac=HyiMmiWqLT84T6ekFJ7STK5l1yFF45gSkaafBtFQcyc",
  ];
  const background = ["/bg/bg1.jpg", "/bg/bg2.jpg"];

  useEffect(() => {
    const waktuPerubahan = setInterval(() => {
      const nextIndex = (titikSaatIni + 1) % gambar.length;
      setSlide(true);
      setTimeout(() => {
        mengaturTitikSaatIni(nextIndex);
        setSlide(false);
      }, 500);
    }, 5000);

    return () => clearInterval(waktuPerubahan);
  }, [titikSaatIni, gambar.length]);

  const gantiGambar = (index: React.SetStateAction<number>) => {
    setSlide(true);
    setTimeout(() => {
      mengaturTitikSaatIni(index);
      setSlide(false);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center relative">
        <div
          className={`absolute -left-4 md:-left-14 lg:-left-16 transition-transform duration-500 ${
            slide ? "-translate-x-2 md:-translate-x-4" : "translate-x-0"
          }`}
        >
          <div className="w-[320px] h-[320px] md:w-full md:h-full">
            <img
              src={gambar[titikSaatIni]}
              alt="Me"
              className="object-cover w-[320px] h-[320px] md:w-full md:h-full"
            />
          </div>
        </div>

        <div
          className={`relative -z-10 -right-4 md:-right-14 lg:-right-16 transition-transform duration-500 ${
            slide ? "translate-x-2 md:translate-x-4" : "-translate-x-0"
          }`}
        >
          <div className="w-[300px] h-[380px] md:w-[400px] md:h-[550px]">
            <img
              src={background[titikSaatIni]}
              alt="Background"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="absolute -bottom-8 lg:bottom-4 flex items-center justify-center gap-2">
          {gambar.map((_, index) => (
            <div
              key={index}
              className={`rounded-full cursor-pointer ${
                index === titikSaatIni
                  ? "bg-black p-2 border border-black lg:bg-white lg:border-white"
                  : "border border-black p-2 lg:border-white"
              }`}
              onClick={() => gantiGambar(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Me;
