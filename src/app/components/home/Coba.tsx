"use client";
import React, { useState, useEffect } from "react";

const Coba = () => {
  const [titikSaatIni, mengaturTitikSaatIni] = useState(0);
  const [animasiGeser, mengaturAnimasiGeser] = useState(false);
  const [sentuhX, mengaturSentuhX] = useState(0);

  const gambar = [
    {
      foto: "https://fastly.picsum.photos/id/501/900/500.jpg?hmac=C86Xc0e9WvJ3ZqwwE-7nHdH7_knINAIw-1IULXSusN4",
      judul: "I AM",
      subJudul: "RIZKY PUTRA",
    },

    {
      foto: "https://fastly.picsum.photos/id/281/900/500.jpg?hmac=kgHy9BI0bU8yCwI-T_otZvnibeVWjQbigaH2VwvqPD4",
      judul: "CREAVITY",
      subJudul: "ABOVE ALL",
    },
  ];
  const latarBelakang = ["/bg/bg1.jpg", "/bg/bg2.jpg"];

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
            className={`relative md:absolute md:top-10 md:-right-14 transition-transform duration-500 ${
              animasiGeser
                ? "-translate-x-2 md:-translate-x-4"
                : "translate-x-0"
            }`}
          >
            <div className="w-full h-60 md:w-[450px] md:h-80">
              <img
                src={gambar[titikSaatIni].foto}
                alt="me"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div
            className={`absolute md:relative top-[2px] -z-10 right-0 md:-right-32 md:top-0 transition-transform duration-500 ${
              animasiGeser ? "translate-x-2 md:translate-x-4" : "translate-x-0"
            }`}
          >
            <div className="w-64 h-[300px] md:w-[350px] md:h-[400px]">
              <img
                src={latarBelakang[titikSaatIni]}
                alt="Background"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div
            className={`absolute left-0 -bottom-11 md:-bottom-28 md:-left-36 ease-in-out duration-1000 ${
              animasiGeser ? "opacity-0" : " opacity-100"
            }`}
          >
            <div className="p-2">
              <h1 className="text-4xl md:text-6xl font-kedua font-extrabold">
                {gambar[titikSaatIni].judul}
              </h1>

              <h2 className="text-4xl md:text-6xl font-kedua font-extrabold">
                {gambar[titikSaatIni].subJudul}
              </h2>
            </div>
          </div>

          <div className="absolute -bottom-10 right-10 md:-bottom-20 md:-right-10 flex items-center justify-center gap-2">
            {gambar.map((_, titik) => (
              <div
                key={titik}
                className={`rounded-full cursor-pointer ${
                  titik === titikSaatIni
                    ? "p-2 md:p-4 border border-white md:border-black"
                    : "p-2 md:p-4"
                }`}
                onClick={() => gantiGambar(titik)}
              >
                <div className="w-2 h-2 bg-white md:bg-black rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coba;
