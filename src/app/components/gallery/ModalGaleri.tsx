import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  membuka: boolean;
  menutup: () => void;
  foto: string;
  fotoKedua: string | null;
  deskripsi: string;
}

const ModalGaleri: React.FC<ModalProps> = ({
  membuka,
  menutup,
  foto,
  fotoKedua,
  deskripsi,
}) => {
  const [gambarSekarang, mengaturGambarSekarang] = useState<string>(foto);
  const [titikAktif, mengaturTitikAktif] = useState(1);
  const modalRef = useRef<HTMLDivElement>(null);
  const sentuhanLayar = useRef<number | null>(null);

  useEffect(() => {
    if (membuka) {
      mengaturGambarSekarang(foto);
      mengaturTitikAktif(1);
    }

    if (membuka) {
      document.addEventListener("keydown", menekanKeyboard);
      modalRef.current?.addEventListener("touchstart", awalSentuhan);
      modalRef.current?.addEventListener("touchmove", gerakanSetuhan);
      modalRef.current?.addEventListener("touchend", akhirSentuhan);
    }

    return () => {
      document.removeEventListener("keydown", menekanKeyboard);
      modalRef.current?.removeEventListener("touchstart", awalSentuhan);
      modalRef.current?.removeEventListener("touchmove", gerakanSetuhan);
      modalRef.current?.removeEventListener("touchend", akhirSentuhan);
    };
  }, [membuka, foto, deskripsi, menutup]);

  const menekanKeyboard = (tekan: KeyboardEvent) => {
    if (tekan.key === "Escape") {
      menutup();
    } else if (tekan.key === "ArrowRight" && fotoKedua) {
      beralihGambar(fotoKedua, 2);
    } else if (tekan.key === "ArrowLeft") {
      beralihGambar(foto, 1);
    }
  };

  const awalSentuhan = (geser: TouchEvent) => {
    sentuhanLayar.current = geser.touches[0].clientX;
  };

  const gerakanSetuhan = (geser: TouchEvent) => {
    if (sentuhanLayar.current !== null) {
      geser.preventDefault();
    }
  };

  const akhirSentuhan = (geser: TouchEvent) => {
    if (sentuhanLayar.current !== null) {
      const touchEndX = geser.changedTouches[0].clientX;
      const deltaX = sentuhanLayar.current - touchEndX;

      if (deltaX > 50 && fotoKedua) {
        beralihGambar(fotoKedua, 2);
      } else if (deltaX < -50) {
        beralihGambar(foto, 1);
      }

      sentuhanLayar.current = null;
    }
  };

  const beralihGambar = (gambar: string, titik: number) => {
    mengaturGambarSekarang(gambar);
    mengaturTitikAktif(titik);
  };

  const klikLuar = (klik: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === klik.target) {
      menutup();
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
      onClick={klikLuar}
    >
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center justify-center p-2 bg-white rounded-2xl">
          <div className="w-56 h-56 md:w-72 md:h-72 xl:w-96 xl:h-96 m-2 relative flex items-center justify-center">
            <img
              src={gambarSekarang}
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
