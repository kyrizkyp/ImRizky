import React from "react";
import GaleriData from "@/app/data/GaleriData";

interface GaleriDetailProps {
  galeriId: string;
}

const DetailGallery: React.FC<GaleriDetailProps> = ({ galeriId }) => {
  const detailGaleri = GaleriData.find((detail) => detail.id === galeriId);

  if (!detailGaleri) {
    return (
      <div>
        <h1 className="text-4xl">Ini kosong</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <img src={detailGaleri.foto} alt="event" />
        <p>{detailGaleri.deskripsi}</p>
      </div>
    </div>
  );
};

export default DetailGallery;
