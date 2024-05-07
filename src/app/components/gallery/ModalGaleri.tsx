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
  const [gambarSaatIni, mengaturGambarSaatIni] = useState(foto);
  const [titikAktif, mengaturTitikAktif] = useState(1);
  const [sentuhanAwalX, mengaturSentuhanAwalX] = useState(0);
  const [sentuhanAkhirX, mengaturSentuhanAkhirX] = useState(0);

  useEffect(() => {
    mengaturGambarSaatIni(foto);
    mengaturTitikAktif(1);
  }, [foto]);

  const beralihGambar = (gamber: string, titik: number) => {
    mengaturGambarSaatIni(gamber);
    mengaturTitikAktif(titik);
  };

  const menutupModal = () => {
    mengaturGambarSaatIni(foto);
    mengaturTitikAktif(1);
    menutup();
  };

  const klikKeyboard = (menekan: KeyboardEvent) => {
    if (menekan.key === "Escape") {
      menutupModal();
    } else if (menekan.key === "ArrowLeft") {
      gambarSebelumnya();
    } else if (menekan.key === "ArrowRight") {
      gambarSelanjutnya();
    }
  };

  const gambarSelanjutnya = () => {
    if (fotoKedua) {
      beralihGambar(fotoKedua, 2);
    }
  };

  const gambarSebelumnya = () => {
    beralihGambar(foto, 1);
  };

  const memulaiSentuhan = (geser: React.TouchEvent<HTMLDivElement>) => {
    mengaturSentuhanAwalX(geser.touches[0].clientX);
  };

  const sentuhanBerpindah = (geser: React.TouchEvent<HTMLDivElement>) => {
    mengaturSentuhanAkhirX(geser.touches[0].clientX);
  };

  const akhirSentuhan = () => {
    if (sentuhanAwalX - sentuhanAkhirX > 50) {
      gambarSelanjutnya();
    }

    if (sentuhanAwalX - sentuhanAkhirX < -50) {
      gambarSebelumnya();
    }
  };

  const klikLuar = (klik: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === klik.target) {
      menutupModal();
    }
  };

  useEffect(() => {
    if (membuka) {
      document.addEventListener("keyup", klikKeyboard, false);
    } else {
      document.removeEventListener("keyup", klikKeyboard, false);
    }

    return () => {
      document.removeEventListener("keyup", klikKeyboard, false);
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
      onClick={klikLuar}
      onTouchStart={memulaiSentuhan}
      onTouchMove={sentuhanBerpindah}
      onTouchEnd={akhirSentuhan}
    >
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center justify-center p-2 bg-white rounded-2xl">
          <div className="w-56 h-56 md:w-72 md:h-72 xl:w-96 xl:h-96 m-2 relative flex items-center justify-center">
            <img
              src={gambarSaatIni}
              alt="Detail"
              className="object-cover w-full h-full md:rounded-l-2xl"
            />

            {fotoKedua && (
              <div className="absolute -bottom-8 md:bottom-2 flex items-center justify-center gap-1 md:gap-2">
                {[foto, fotoKedua].map((gambar, urutan) => (
                  <button
                    key={urutan}
                    className={`rounded-full ${
                      titikAktif === urutan + 1
                        ? "p-1.5 border border-black md:border-white"
                        : "p-1.5"
                    }`}
                    onClick={() => beralihGambar(gambar, urutan + 1)}
                  >
                    <div className="w-2 h-2 rounded-full bg-black md:bg-white"></div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="m-6 relative flex items-center justify-center">
            <div className="p-2 border-l border-black max-w-[250px] md:max-w-[300px]">
              <p className="font-pertama">{deskripsi}</p>
            </div>

            <div className="absolute w-4 h-10 border-l border-t border-black -top-2 -left-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGaleri;
