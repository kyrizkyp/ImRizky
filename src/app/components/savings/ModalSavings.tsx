import React from "react";

interface ModalSavingsProps {
  membuka: boolean;
  konten: string;
  namaInput: string;
  menutup: () => void;
  perubahan: (event: React.ChangeEvent<HTMLInputElement>) => void;
  menyimpan: () => void;
  errorMessage: string;
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
  if (!membuka) return null;

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center justify-center rounded-2xl bg-white">
        <h2 className="text-2xl p-4">{konten}</h2>

        <div className="flex items-center justify-center">
          <input
            type="number"
            value={namaInput}
            onChange={perubahan}
            placeholder={`Masukkan nominal ${konten.toLowerCase()}`}
            className="border p-2 w-full mb-4"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
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
