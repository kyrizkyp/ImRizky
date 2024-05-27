import React from "react";

interface ModalSavingsProps {
  membuka: boolean;
  konten: string;
  namaInput: string;
  menutup: () => void;
  perubahan: (event: React.ChangeEvent<HTMLInputElement>) => void;
  menyimpan: () => void;
}

const ModalSavings: React.FC<ModalSavingsProps> = ({
  membuka,
  konten,
  namaInput,
  menutup,
  perubahan,
  menyimpan,
}) => {
  if (!membuka) return null;

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl mb-4">{konten}</h2>
        <input
          type="number"
          value={namaInput}
          onChange={perubahan}
          placeholder={`Masukkan nominal ${konten.toLowerCase()}`}
          className="border p-2 w-full mb-4"
        />

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
  );
};

export default ModalSavings;
