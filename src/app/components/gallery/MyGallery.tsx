import { IconMoodSad, IconPhotoOff } from "@tabler/icons-react";
import React from "react";

interface DataFoto {
  foto: string;
  fotoKedua?: string;
  deskripsi: string;
}

interface MyGalleryProps {
  data: DataFoto[];
  modalTerbuka: (foto: string, fotoKedua: string, deskripsi: string) => void;
}

const MyGallery: React.FC<MyGalleryProps> = ({ data, modalTerbuka }) => {
  if (data.length === 0 || data.every((item) => !item.deskripsi.trim())) {
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
  }

  return (
    <div className="flex items-center justify-center m-2">
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-2">
        {data.map((DataFoto, urutan) => (
          <div
            className="w-[100px] h-[100px] md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 cursor-pointer bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-10 relative"
            key={urutan}
            onClick={() =>
              modalTerbuka(
                DataFoto.foto,
                DataFoto.fotoKedua || "",
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
        ))}
      </div>
    </div>
  );
};

export default MyGallery;
