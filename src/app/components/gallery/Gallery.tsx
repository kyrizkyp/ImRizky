"use client";

import React, { useState } from "react";
import GaleriData from "@/app/data/GaleriData";
import ModalGaleri from "./ModalGaleri";
import Plus from "../background/Plus";

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
  const [tampilkanFotoKedua, mengaturTampilkanFotoKedua] = useState("");
  const [tampilkanDeskripsi, mengaturTampilkanDeskripsi] = useState("");

  const modalTerbuka = (foto: string, fotoKedua: string, deskripsi: string) => {
    mengaturTampilkanFoto(foto);
    mengaturTampilkanFotoKedua(fotoKedua);
    mengaturTampilkanDeskripsi(deskripsi);
    mengaturBukaModal(true);
  };

  const tutupModal = () => {
    mengaturBukaModal(false);
  };

  const sampulGaleri = [
    "/bg/kiri.jpg",

    "https://fastly.picsum.photos/id/907/450/800.jpg?hmac=gvL8sb4Dlt2h1pgn59onT0pf-_KUQ_FAluzrA_oYWf0",

    "/bg/kanan.jpg",
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {tampilkanSampul && (
        <div className="w-full px-4 md:px-10 xl:px-24 2xl:px-72">
          <div className="flex items-center justify-between gap-4 md::gap-0">
            {sampulGaleri.map((sampul, urutan) => (
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
      )}

      {tampilkanSampul && (
        <div className="w-full px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-80 mb-4">
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

      <div>
        <Plus />
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <div className="p-4 max-w-2xl text-center">
          <h1 className="font-kedua font-extrabold text-3xl">MY GALLERY</h1>
          <p className="font-pertama text-lg p-2">A collection of my photos.</p>
        </div>

        <div className="flex items-center justify-center m-2">
          <div className="grid grid-cols-3 xl:grid-cols-4 gap-2">
            {(batasGambar ? GaleriData.slice(0, batasGambar) : GaleriData).map(
              (DataFoto, urutan) => (
                <div
                  className="w-[100px] h-[100px] md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 cursor-pointer bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-10 relative"
                  key={urutan}
                  onClick={() =>
                    modalTerbuka(
                      DataFoto.foto,
                      DataFoto.fotoKedua,
                      DataFoto.deskripsi
                    )
                  }
                >
                  <img
                    src={DataFoto.foto}
                    alt="galeri"
                    className="object-cover w-full h-full absolute -z-10 inset-0"
                  />

                  {DataFoto.fotoKedua && (
                    <div className="absolute right-[2px] md:right-1 lg:right-2 top-[2px] md:top-1 lg:top-2">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute right-1 top-1 w-4 md:w-6 h-4 md:h-6 border-2 border-white rounded shadow-xl"></div>

                        <div className="absolute top-2 right-2 w-4 md:w-6 h-4 md:h-6 bg-white rounded"></div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        <ModalGaleri
          membuka={bukaModal}
          menutup={tutupModal}
          foto={tampilkanFoto}
          deskripsi={tampilkanDeskripsi}
          fotoKedua={tampilkanFotoKedua}
        />
      </div>
    </div>
  );
};

export default Gallery;
