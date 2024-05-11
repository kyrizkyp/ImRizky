"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [titikSaatIni, mengaturTitikSaatIni] = useState(0);
  const [animasiGeser, mengaturAnimasiGeser] = useState(false);
  const [sentuhX, mengaturSentuhX] = useState(0);

  const gambar = [
    {
      foto: "https://fastly.picsum.photos/id/501/900/500.jpg?hmac=C86Xc0e9WvJ3ZqwwE-7nHdH7_knINAIw-1IULXSusN4",
      judul: "I AM",
      subJudul: "KYRIZKYP",
      btnJudul: "INTRODUCE",
      link: "/about-me",
    },

    {
      foto: "https://fastly.picsum.photos/id/281/900/500.jpg?hmac=kgHy9BI0bU8yCwI-T_otZvnibeVWjQbigaH2VwvqPD4",
      judul: "ARTS WEB",
      subJudul: "FRONT-END",
      btnJudul: "ARTWORK",
      link: "/artwork",
    },

    {
      foto: "https://fastly.picsum.photos/id/1064/900/500.jpg?hmac=ilOQsllcQK35qGpAnicBwYWuuO-zou9eVwDCUF2OeGk",
      judul: "CREAVITY",
      subJudul: "ABOVE ALL",
      btnJudul: "NOTE IT DOWN",
      link: "/blogs",
    },
  ];
  const latarBelakang = ["/bg/bg1.jpg", "/bg/bg2.jpg", "/bg/bg3.jpg"];

  useEffect(() => {
    const waktuPerubahan = setInterval(() => {
      const perubahanAnimasi = (titikSaatIni + 1) % gambar.length;
      mengaturAnimasiGeser(true);
      setTimeout(() => {
        mengaturTitikSaatIni(perubahanAnimasi);
        mengaturAnimasiGeser(false);
      }, 500);
    }, 4000);

    const navigasiKeyboard = (klik: { key: string }) => {
      if (klik.key === "ArrowLeft" && titikSaatIni !== 0) {
        const sebelumnya =
          titikSaatIni === 0 ? gambar.length - 1 : titikSaatIni - 1;
        gantiGambar(sebelumnya);
      } else if (
        klik.key === "ArrowRight" &&
        titikSaatIni !== gambar.length - 1
      ) {
        const selanjutnya = (titikSaatIni + 1) % gambar.length;
        gantiGambar(selanjutnya);
      }
    };

    document.addEventListener("keydown", navigasiKeyboard);

    return () => {
      clearInterval(waktuPerubahan);
      document.removeEventListener("keydown", navigasiKeyboard);
    };
  }, [titikSaatIni, gambar.length]);

  const gantiGambar = (konten: React.SetStateAction<number>) => {
    mengaturAnimasiGeser(true);
    setTimeout(() => {
      mengaturTitikSaatIni(konten);
      mengaturAnimasiGeser(false);
    }, 500);
  };

  const sentuhanDimulai = (menggeser: React.TouchEvent<HTMLDivElement>) => {
    mengaturSentuhX(menggeser.touches[0].clientX);
  };

  const sentuhanBerpindah = (perubahan: React.TouchEvent<HTMLDivElement>) => {
    const sentuhAkhirX = perubahan.touches[0].clientX;
    const perbedaanX = sentuhAkhirX - sentuhX;

    if (Math.abs(perbedaanX) > 50) {
      if (perbedaanX > 0 && titikSaatIni !== 0) {
        const indexSebelumnya =
          titikSaatIni === 0 ? gambar.length - 1 : titikSaatIni - 1;
        gantiGambar(indexSebelumnya);
      } else if (perbedaanX < 0 && titikSaatIni !== gambar.length - 1) {
        const indexSelanjutnya = (titikSaatIni + 1) % gambar.length;
        gantiGambar(indexSelanjutnya);
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center"
      onTouchStart={sentuhanDimulai}
      onTouchMove={sentuhanBerpindah}
    >
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div
            className={`relative md:absolute md:top-10 md:-right-14 lg:top-12 lg:-right-52 xl:-right-80 transition-transform duration-500 ${
              animasiGeser
                ? "-translate-x-20 md:-translate-x-6"
                : "translate-x-0"
            }`}
          >
            <div className="w-full h-60 md:w-[450px] md:h-80 lg:w-[500px] lg:h-[400px] xl:w-[740px] xl:h-[500px]">
              <img
                src={gambar[titikSaatIni].foto}
                alt="me"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div
            className={`absolute md:relative top-[2px] -z-10 right-0 md:-right-32 md:top-0 lg:-right-72 xl:-right-[440px] transition-transform duration-500 ${
              animasiGeser ? "translate-x-2 md:translate-x-6" : "translate-x-0"
            }`}
          >
            <div className="w-64 h-[238px] md:w-[350px] md:h-[400px] lg:w-[400px] lg:h-[500px] xl:w-[420px] xl:h-[600px]">
              <img
                src={latarBelakang[titikSaatIni]}
                alt="Background"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div
            className={`absolute left-0 -bottom-11 md:-bottom-32 md:-left-44 lg:top-32 lg:-left-72 xl:-left-[380px] ease-in-out duration-1000 ${
              animasiGeser ? "opacity-0" : " opacity-100"
            }`}
          >
            <div className="p-2 xl:p-2">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-kedua font-extrabold">
                {gambar[titikSaatIni].judul}
              </h1>

              <h2 className="text-4xl md:text-6xl lg:text-8xl font-kedua font-extrabold">
                {gambar[titikSaatIni].subJudul}
              </h2>
            </div>

            <div className="mx-10 my-2 md:my-4">
              <Link
                href={gambar[titikSaatIni].link}
                className="py-2 px-6 bg-black text-white font-kedua text-2xl"
              >
                {gambar[titikSaatIni].btnJudul}
              </Link>
            </div>
          </div>

          <div className="absolute -bottom-14 right-10 md:-bottom-24 md:-right-10 lg:bottom-0 lg:right-[420px] xl:bottom-28 xl:right-[500px] flex items-center justify-center gap-2">
            {gambar.map((_, titik) => (
              <div
                key={titik}
                className={`rounded-full cursor-pointer transition-transform duration-500 ${
                  titik === titikSaatIni
                    ? "p-4 md:p-6 border border-black scale-100"
                    : "p-4 md:p-6 scale-75"
                }`}
                onClick={() => gantiGambar(titik)}
              >
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            ))}
          </div>

          <div
            className={`absolute -z-20 -bottom-24 -left-2 md:-bottom-16 md:-left-28 lg:-bottom-24 lg:left-8 xl:-top-10 xl:left-28 transition-transform duration-1000 ${
              animasiGeser ? "scale-50" : "scale-100"
            }`}
          >
            <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[560px] lg:h-[560px] xl:w-[680px] xl:h-[680px] border border-black rounded-full"></div>
          </div>

          <div
            className={`hidden md:block absolute top-0 md:-left-20 lg:top-5 lg:left-20 xl:top-2 xl:-left-10 ease-in-out duration-700 ${
              animasiGeser ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="md:w-20 md:h-60 lg:w-24 lg:h-24 border-l border-t border-black"></div>
          </div>

          <div className="absolute -bottom-20 right-12 md:-bottom-6 md:right-4 lg:-bottom-10 lg:right-40 xl:bottom-0 xl:right-60">
            <div className="w-48 h-4 lg:w-72 xl:w-[400px] border-b border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
