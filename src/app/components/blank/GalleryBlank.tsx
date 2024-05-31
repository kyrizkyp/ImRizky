import { IconPhotoOff } from "@tabler/icons-react";
import React from "react";

const GalleryBlank = () => {
  return (
    <div className="flex item-center justify-center gap-2 m-2">
      <div className="w-[100px] h-[100px] md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 border border-gray-400 flex flex-col items-center justify-center">
        <IconPhotoOff className="w-8 h-8 md:w-28 md:h-28 stroke-[0.5] text-gray-400" />
        <h1 className="font-ketiga text-gray-400 text-xs md:text-lg">
          NO POSTS
        </h1>
      </div>

      <div className="w-[100px] h-[100px] md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 border border-gray-400 flex flex-col items-center justify-center">
        <IconPhotoOff className="w-8 h-8 md:w-28 md:h-28 stroke-[0.5] text-gray-400" />
        <h1 className="font-ketiga text-gray-400 text-xs md:text-lg">
          NO POSTS
        </h1>
      </div>

      <div className="w-[100px] h-[100px] md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 border border-gray-400 flex flex-col items-center justify-center">
        <IconPhotoOff className="w-8 h-8 md:w-28 md:h-28 stroke-[0.5] text-gray-400" />
        <h1 className="font-ketiga text-gray-400 text-xs md:text-lg">
          NO POSTS
        </h1>
      </div>
    </div>
  );
};

export default GalleryBlank;
