import React from "react";

interface ModalListProps {
  membuka: boolean;
  menutup: () => void;
  namaList: string;
  nilaiNominal: string;
  perubahanNamaList: (event: React.ChangeEvent<HTMLInputElement>) => void;
  perubahanNilaiNominal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  menyimpan: () => void;
}

const ModalList: React.FC<ModalListProps> = ({
  membuka,
  menutup,
  namaList,
  nilaiNominal,
  perubahanNamaList,
  perubahanNilaiNominal,
  menyimpan,
}) => {
  if (!membuka) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl mb-4">Tambah/Edit List Pembelian</h2>
        <input
          type="text"
          value={namaList}
          onChange={perubahanNamaList}
          placeholder="Nama List Pembelian"
          className="mb-2 p-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={nilaiNominal}
          onChange={perubahanNilaiNominal}
          placeholder="Nominal Pembelian"
          className="mb-4 p-2 border border-gray-400 rounded"
        />
        <div className="flex justify-end gap-2">
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
