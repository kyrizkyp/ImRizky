import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  membuka: boolean;
  menutup: () => void;
  foto: string;
  fotoKedua?: string;
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
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

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
    } else if (event.key === "ArrowLeft") {
      // Previous image on left arrow press
      switchToPreviousImage();
    } else if (event.key === "ArrowRight") {
      // Next image on right arrow press
      switchToNextImage();
    }
  };

  const switchToNextImage = () => {
    if (fotoKedua) {
      switchImage(fotoKedua, 2);
    }
  };

  const switchToPreviousImage = () => {
    switchImage(foto, 1);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe to the left
      // Switch to the next image
      switchToNextImage();
    }

    if (touchStartX - touchEndX < -50) {
      // Swipe to the right
      // Switch to the previous image
      switchToPreviousImage();
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
              <div className="absolute -bottom-8 md:bottom-2 flex items-center justify-center gap-1 md:gap-2">
                {[foto, fotoKedua].map((image, index) => (
                  <button
                    key={index}
                    className={`rounded-full ${
                      activeDot === index + 1
                        ? "p-1.5 border border-black md:border-white"
                        : "p-1.5"
                    }`}
                    onClick={() => switchImage(image, index + 1)}
                  >
                    <div className="w-2 h-2 rounded-full bg-black md:bg-white"></div>
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
