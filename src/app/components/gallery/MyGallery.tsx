import React from "react";
import GalleryBlank from "../blank/GalleryBlank";

interface DataFoto {
  foto: string;
  fotoKedua?: string;
  deskripsi: string;
  // id: string;
}

interface MyGalleryProps {
  data: DataFoto[];
  modalTerbuka: (
    foto: string,
    fotoKedua: string,
    deskripsi: string
    // id: string
  ) => void;
}

const MyGallery: React.FC<MyGalleryProps> = ({ data, modalTerbuka }) => {
  if (data.length === 0 || data.every((item) => !item.deskripsi.trim())) {
    return (
      <main>
        <section>
          <GalleryBlank />
        </section>
      </main>
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
                // DataFoto.id
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
