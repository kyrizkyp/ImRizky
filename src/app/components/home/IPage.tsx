import Link from "next/link";
import React from "react";
import HalamanData from "@/app/data/HalamanData";

const IPage = () => {
  return (
    <div className="w-full px-2 md:px-8 lg:px-12 xl:px-14 2xl:px-32">
      <div className="flex items-center justify-between gap-2 md:gap-6">
        {HalamanData.map((urutan, konten) => (
          <Link
            href={urutan.link}
            className="w-full h-40 md:h-full flex items-center justify-center bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-10"
            key={konten}
          >
            <img
              src={urutan.foto}
              alt="Me"
              className="object-cover w-full h-full -z-10"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IPage;
