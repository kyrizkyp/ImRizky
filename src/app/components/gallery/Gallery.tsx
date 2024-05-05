"use client";

import React, { useState } from "react";
import GaleriData from "@/app/data/GaleriData";
import ModalGaleri from "./ModalGaleri";

interface GalleryProps {
  batasGambar: number | null;
  tampilkanSampul: boolean;
}

const Gallery = ({
  batasGambar = null,
  tampilkanSampul = true,
}: GalleryProps) => {
  const [bukaModal, mengaturBukaModal] = useState(false);
  const [tampilkanFoto, mengaturTampilkanFoto] = useState("");
  const [tampilkanDeskripsi, mengaturTampilkanDeskripsi] = useState("");

  const modalTerbuka = (foto: string, deskripsi: string) => {
    mengaturTampilkanFoto(foto);
    mengaturTampilkanDeskripsi(deskripsi);
    mengaturBukaModal(true);
  };

  const tutupModal = () => {
    mengaturBukaModal(false);
  };

  const sampulGaleri = [
    "https://fastly.picsum.photos/id/1031/450/800.jpg?hmac=_kCrMGQbOzYIo6Wa8ldrZpoNJeRKtRwigzN2mhsFoDg",

    "https://fastly.picsum.photos/id/907/450/800.jpg?hmac=gvL8sb4Dlt2h1pgn59onT0pf-_KUQ_FAluzrA_oYWf0",

    "https://fastly.picsum.photos/id/842/450/800.jpg?hmac=pq7l4koxScV85cmKrFgCIfOyVPqBcZpE01giefemM4Q",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {tampilkanSampul && (
          <div className="w-full mb-6">
            <div className="flex items-center justify-between gap-2 md:gap-6 xl:gap-10">
              {sampulGaleri.map((sampul, urutan) => (
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

            <div className="relative p-4 self-start">
              <div className="max-w-md p-4 border-l border-black">
                <p className="font-pertama">
                  Photo galleries are like love revealing beauty in the details.
                  Each image is a memory, recording a precious moment. Like
                  relationships, composition and lighting build a story.
                </p>
              </div>

              <div className="w-8 h-24 border-l border-t border-black absolute left-2 top-6"></div>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center">
          <div className="p-4 max-w-2xl text-center">
            <h1 className="font-kedua font-extrabold text-3xl">MY GALLERY</h1>
            <p className="font-pertama text-lg p-2">
              A collection of my photos.
            </p>
          </div>

          <div className="flex items-center justify-center m-2">
            <div className="grid grid-cols-3 gap-2">
              {(batasGambar
                ? GaleriData.slice(0, batasGambar)
                : GaleriData
              ).map((DataFoto, urutan) => (
                <div
                  className="w-[100px] h-[100px] md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 cursor-pointer hover:bg-black hover:bg-opacity-50 relative"
                  key={urutan}
                  onClick={() =>
                    modalTerbuka(DataFoto.foto, DataFoto.deskripsi)
                  }
                >
                  <img
                    src={DataFoto.foto}
                    alt="galeri"
                    className="object-cover w-full h-full absolute -z-10 inset-0"
                  />
                </div>
              ))}
            </div>
          </div>

          <ModalGaleri
            membuka={bukaModal}
            menutup={tutupModal}
            foto={tampilkanFoto}
            deskripsi={tampilkanDeskripsi}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
