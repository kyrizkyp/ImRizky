"use client";
import React, { useState, useEffect } from "react";

const Coba = () => {
  const [titikSaatIni, mengaturTitikSaatIni] = useState(0);
  const [animasiGeser, mengaturAnimasiGeser] = useState(false);
  const [sentuhX, mengaturSentuhX] = useState(0);

  const gambar = [
    {
      foto: "https://fastly.picsum.photos/id/741/500/500.jpg?hmac=QxgEVGp1dAJW9qBYyKqxns1xKcymqoc16utopq1Osck",
      judul: "I AM",
      subJudul: "RIZKY PUTRA",
    },

    {
      foto: "https://fastly.picsum.photos/id/468/500/500.jpg?hmac=HyiMmiWqLT84T6ekFJ7STK5l1yFF45gSkaafBtFQcyc",
      judul: "FRONT-END",
      subJudul: "WEB DEVELOPER",
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
    <div className="flex items-center justify-center">
      <div
        className=""
        onTouchStart={sentuhanDimulai}
        onTouchMove={sentuhanBerpindah}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute top-0 left-10">
              <div
                className={`transition-transform duration-500 ${
                  animasiGeser
                    ? "translate-x-2 md:translate-x-4"
                    : "-translate-x-0"
                }`}
              >
                <div className="w-52 h-72">
                  <img
                    src={latarBelakang[titikSaatIni]}
                    alt="Background"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-0 -right-40">
              <div
                className={`transition-transform duration-500 ${
                  animasiGeser
                    ? "-translate-x-2 md:-translate-x-4"
                    : "translate-x-0"
                }`}
              >
                <div className="w-96 h-64">
                  <img
                    src={gambar[titikSaatIni].foto}
                    alt="me"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coba;
