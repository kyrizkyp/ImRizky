import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  membuka: boolean;
  menutup: () => void;
  foto: string;
  fotoKedua: string;
  deskripsi: string;
}

const ModalGaleri: React.FC<ModalProps> = ({
  membuka,
  menutup,
  foto,
  fotoKedua,
  deskripsi,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(foto);
  const [activeDot, setActiveDot] = useState(1);

  useEffect(() => {
    setCurrentImage(foto);
    setActiveDot(1);
  }, [foto]);

  const switchImage = (image: string, dotIndex: number) => {
    setCurrentImage(image);
    setActiveDot(dotIndex);
  };

  const closeModal = () => {
    setCurrentImage(foto);
    setActiveDot(1);
    menutup();
  };

  const closeOnEscapePress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    if (membuka) {
      document.addEventListener("keyup", closeOnEscapePress, false);
    } else {
      document.removeEventListener("keyup", closeOnEscapePress, false);
    }

    return () => {
      document.removeEventListener("keyup", closeOnEscapePress, false);
    };
  }, [membuka]);

  return (
    <div
      className={`fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 transition-opacity ${
        membuka
          ? "opacity-100 duration-500"
          : "opacity-0 duration-500 pointer-events-none"
      }`}
      ref={modalRef}
      onClick={handleClickOutside}
    >
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center justify-center p-2 bg-white rounded-2xl">
          <div className="w-56 h-56 md:w-72 md:h-72 xl:w-96 xl:h-96 m-2 relative flex items-center justify-center">
            <img
              src={currentImage}
              alt="Detail"
              className="object-cover w-full h-full md:rounded-l-2xl"
            />

            {fotoKedua && (
              <div className="absolute bottom-1 flex items-center justify-center gap-2">
                {[foto, fotoKedua].map((image, index) => (
                  <button
                    key={index}
                    className={`rounded-full ${
                      activeDot === index + 1
                        ? "p-2 border border-white"
                        : "p-2"
                    }`}
                    onClick={() => switchImage(image, index + 1)}
                  >
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="m-6 relative flex items-center justify-center">
            <div className="p-2 border-l border-black max-w-[250px] md:max-w-[300px]">
              <p className="">{deskripsi}</p>
            </div>

            <div className="absolute w-4 h-10 border-l border-t border-black -top-2 -left-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGaleri;
