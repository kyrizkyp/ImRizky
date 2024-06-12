import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  membuka: boolean;
  menutup: () => void;
  foto: string;
  fotoKedua: string | null;
  deskripsi: string;
}

const ModalGallery: React.FC<ModalProps> = ({
  membuka,
  menutup,
  foto,
  fotoKedua,
  deskripsi,
}) => {
  const [gambarSekarang, mengaturGambarSekarang] = useState<string>(foto);
  const [titikAktif, mengaturTitikAktif] = useState(1);
  const [tampilkanDeskripsiLengkap, setTampilkanDeskripsiLengkap] =
    useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const sentuhanLayar = useRef<number | null>(null);
  const [tampilkanTombol, setTampilkanTombol] = useState(false);

  useEffect(() => {
    if (membuka) {
      mengaturGambarSekarang(foto);
      mengaturTitikAktif(1);
      setTampilkanDeskripsiLengkap(false);
    }

    setTampilkanTombol(deskripsi.split(" ").length > 15);

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

  const toggleDeskripsi = () => {
    setTampilkanDeskripsiLengkap(!tampilkanDeskripsiLengkap);
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
        <div className="flex flex-col md:flex-row items-center justify-center p-2">
          <div className="w-56 h-56 md:w-72 md:h-72 xl:w-96 xl:h-96 relative flex items-center justify-center">
            <img
              src={gambarSekarang}
              alt="Detail"
              className="object-cover w-full h-full"
            />

            {fotoKedua && (
              <div className="absolute -bottom-5 md:bottom-2 flex items-center justify-center gap-1 md:gap-2">
                {[foto, fotoKedua].map((gambar, urutan) => (
                  <button
                    key={urutan}
                    className={`rounded-full ${
                      titikAktif === urutan + 1
                        ? "p-1 border border-black md:border-white"
                        : "p-1"
                    }`}
                    onClick={() => beralihGambar(gambar, urutan + 1)}
                  >
                    <div className="w-[6px] h-[6px] rounded-full bg-black md:bg-white"></div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-56 h-auto md:w-72 md:h-72 xl:w-96 xl:h-96 px-2 py-4 bg-white">
            <div className="py-1">
              <Link
                href="/"
                className="text-[16px] md:text-xl font-ketiga font-extrabold"
              >
                KYRIZKYP
              </Link>
            </div>

            <div className="relative flex items-center">
              <div className="px-4 py-2">
                <p className="font-pertama text-xs md:text-sm">
                  <span className="hidden md:block">{deskripsi}</span>
                  <span className="md:hidden">
                    {tampilkanDeskripsiLengkap
                      ? deskripsi
                      : `${deskripsi.substring(0, 100)}`}
                  </span>
                </p>

                {tampilkanTombol && (
                  <button
                    onClick={toggleDeskripsi}
                    className="text-gray-400 text-[10px] font-ketiga mt-2 md:hidden"
                  >
                    {tampilkanDeskripsiLengkap ? "SHOW LESS" : "SHOW MORE"}
                  </button>
                )}
              </div>

              <div className="absolute left-1 top-1 h-4 w-4 border-l border-t border-black"></div>

              <div className="absolute left-2 top-2 h-4 w-4 border-l border-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGallery;
