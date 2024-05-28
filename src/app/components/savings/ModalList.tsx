import React, { useEffect, useRef } from "react";

interface ModalListProps {
  membuka: boolean;
  menutup: () => void;
  namaList: string;
  nilaiNominal: string;
  perubahanNamaList: (event: React.ChangeEvent<HTMLInputElement>) => void;
  perubahanNilaiNominal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  menyimpan: () => void;
  errorMessage: boolean;
  isEditing: boolean;
}

const ModalList: React.FC<ModalListProps> = ({
  membuka,
  menutup,
  namaList,
  nilaiNominal,
  perubahanNamaList,
  perubahanNilaiNominal,
  menyimpan,
  errorMessage,
  isEditing,
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
        <h2 className="text-xl p-4">
          {isEditing ? "Edit List" : "Tambah List"}
        </h2>

        <div className="flex flex-col items-start justify-center">
          <input
            type="text"
            value={namaList}
            onChange={perubahanNamaList}
            placeholder={isEditing ? "Edit List" : "Tambah List"}
            className="mb-2 p-2 border border-gray-400 rounded"
          />

          <input
            type="number"
            value={nilaiNominal}
            onChange={perubahanNilaiNominal}
            placeholder="Nominal Pembelian"
            className="mb-4 p-2 border border-gray-400 rounded"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-center">tidak boleh kosong</p>
        )}

        <div className="flex justify-end gap-2 p-4">
          <button
            onClick={menutup}
            className="py-2 px-4 bg-gray-400 text-white rounded"
          >
            Batal
          </button>
          <button
            onClick={menyimpan}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalList;
