"use client";

import React, { useState } from "react";
import HalamanData from "@/app/data/HalamanData";
import SampulData from "@/app/data/SampulData";
import ModalGallery from "./ModalGallery";
import Plus from "../background/Plus";
import MyGallery from "./MyGallery";
import GaleriData from "@/app/data/GaleriData";

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

  // const updateURL = (id: any) => {
  //   const currentPath = window.location.pathname;

  //   if (currentPath === "/") {
  //     window.history.pushState(null, "", `/${id}`);
  //   } else if (currentPath === "/gallery") {
  //     window.history.pushState(null, "", `/gallery/${id}`);
  //   }
  // };

  // const resetURL = () => {
  //   const jalurSaatIni = window.location.pathname;
  //   const idUrl = window.location.pathname.split("/")[1];

  //   if (jalurSaatIni === "/") {
  //     window.history.pushState(null, "", "/");
  //   } else if (jalurSaatIni === "/gallery") {
  //     window.history.pushState(null, "", "/gallery");
  //   } else if (idUrl) {
  //     if (jalurSaatIni.startsWith("/gallery/")) {
  //       window.history.pushState(null, "", "/gallery");
  //     } else {
  //       window.history.pushState(null, "", "/");
  //     }
  //   }
  // };

  const modalTerbuka = (
    foto: string,
    fotoKedua: string,
    deskripsi: string
    // id: string
  ) => {
    mengaturTampilkanFoto(foto);
    mengaturTampilkanFotoKedua(fotoKedua);
    mengaturTampilkanDeskripsi(deskripsi);
    mengaturBukaModal(true);
    // updateURL(id);
  };

  const tutupModal = () => {
    mengaturBukaModal(false);
    // resetURL();
  };

  const fotoGaleri = HalamanData.find((data) => data.link === "/gallery")?.foto;
  const sampulKiri = SampulData.find((data) => data.judul === "kiri")?.foto;
  const sampulKanan = SampulData.find((data) => data.judul === "kanan")?.foto;
  const sampulGaleri = [sampulKiri, fotoGaleri, sampulKanan];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {tampilkanSampul && (
        <div className="w-full px-4 xl:px-24 2xl:px-72">
          <div className="flex items-center justify-between gap-2 md:gap-4 xl:gap-0">
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

          <div className="w-full px-4 md:px-10">
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
        </div>
      )}

      {tampilkanSampul && (
        <div className="my-4">
          <Plus />
        </div>
      )}

      <div className="flex flex-col items-center justify-center">
        <div className="max-w-2xl text-center mb-4">
          <h1 className="font-kedua font-extrabold text-3xl">MY GALLERY</h1>
          <p className="font-pertama text-lg p-2">A collection of my photos.</p>
        </div>

        <MyGallery
          data={batasGambar ? GaleriData.slice(0, batasGambar) : GaleriData}
          modalTerbuka={modalTerbuka}
        />

        <ModalGallery
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
