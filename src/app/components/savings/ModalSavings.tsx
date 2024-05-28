import React, { useEffect, useRef } from "react";

interface ModalSavingsProps {
  membuka: boolean;
  konten: boolean;
  namaInput: string;
  menutup: () => void;
  perubahan: (event: React.ChangeEvent<HTMLInputElement>) => void;
  menyimpan: () => void;
  errorMessage: boolean;
}

const ModalSavings: React.FC<ModalSavingsProps> = ({
  membuka,
  konten,
  namaInput,
  menutup,
  perubahan,
  menyimpan,
  errorMessage,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        menutup();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && membuka) {
        menutup();
      }
    };

    if (membuka) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [membuka, menutup]);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === event.target) {
      menutup();
    }
  };

  return (
    <div
      ref={modalRef}
      className={`fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        membuka
          ? "opacity-100 duration-500"
          : "opacity-0 duration-500 pointer-events-none"
      }`}
      onClick={handleClickOutside}
    >
      <div className="max-w-xs w-full flex flex-col items-center justify-center rounded-2xl bg-white">
        <h2 className="text-2xl p-4">
          {konten ? "Penghasilan" : "Target pengeluaran"}
        </h2>

        <div className="flex items-center justify-center">
          <input
            type="number"
            value={namaInput}
            onChange={perubahan}
            placeholder={`Masukkan nominal ${
              konten ? "penghasilan" : "target pengeluaran"
            }`}
            className="border p-2 w-full mb-4"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-center">ini tidak boleh kosong</p>
        )}

        <div className="flex justify-end gap-2 p-4">
          <button
            onClick={menyimpan}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Simpan
          </button>

          <button
            onClick={menutup}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSavings;
