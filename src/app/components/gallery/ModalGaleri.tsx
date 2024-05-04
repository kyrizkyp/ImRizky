import React, { useEffect, useRef } from "react";

interface ModalProps {
  membuka: boolean;
  menutup: () => void;
  foto: string;
  deskripsi: string;
}

const ModalGaleri: React.FC<ModalProps> = ({
  membuka,
  menutup,
  foto,
  deskripsi,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const menutupModal = () => {
    menutup();
  };

  const mentutupTekanEsc = (tekanEsc: KeyboardEvent) => {
    if (tekanEsc.key === "Escape") {
      menutupModal();
    }
  };

  useEffect(() => {
    if (membuka) {
      document.addEventListener("keyup", mentutupTekanEsc, false);
    } else {
      document.removeEventListener("keyup", mentutupTekanEsc, false);
    }

    return () => {
      document.removeEventListener("keyup", mentutupTekanEsc, false);
    };
  }, [membuka]);

  const menutupKlikLuar = (
    klikLuar: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (modalRef.current === klikLuar.target) {
      menutupModal();
    }
  };

  return (
    <div
      className={`fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 transition-opacity ${
        membuka
          ? "opacity-100 duration-500"
          : "opacity-0 duration-500 pointer-events-none"
      }`}
      ref={modalRef}
      onClick={menutupKlikLuar}
    >
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center justify-center p-2 bg-white rounded-2xl">
          <div className="w-56 h-56 md:w-72 md:h-72 xl:w-96 xl:h-96 m-2">
            <img
              src={foto}
              alt="Detail"
              className="object-cover w-full h-full md:rounded-l-2xl"
            />
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
