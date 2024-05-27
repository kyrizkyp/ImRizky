import React from "react";

interface ModalListProps {
  membuka: boolean;
  menutup: () => void;
  namaList: string;
  nilaiNominal: string;
  perubahanNamaList: (event: React.ChangeEvent<HTMLInputElement>) => void;
  perubahanNilaiNominal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  menyimpan: () => void;
  errorMessage: string;
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
}) => {
  if (!membuka) return null;

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center justify-center rounded-2xl bg-white">
        <h2 className="text-xl p-4">Tambah/Edit List</h2>

        <div className="flex flex-col items-start justify-center">
          <input
            type="text"
            value={namaList}
            onChange={perubahanNamaList}
            placeholder="Nama List Pembelian"
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
          <p className="text-red-500 text-center">{errorMessage}</p>
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
