import React from "react";
import { IconPencil, IconTrash } from "@tabler/icons-react";

interface DaftarListProps {
  daftarPengeluaran: { nama: string; nominal: string }[];
  btnBukaListModal: () => void;
  btnModalList: (index: number) => void;
  btnModalDelete: (index: number) => void;
  disabled: boolean;
}

const DaftarList: React.FC<DaftarListProps> = ({
  daftarPengeluaran,
  btnBukaListModal,
  btnModalList,
  btnModalDelete,
  disabled,
}) => {
  return (
    <div
      className={`max-w-sm w-full flex flex-col items-center justify-center mt-10 ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <div className="self-start mb-2">
        <p className="py-2">Daftar pengeluaran</p>

        <button
          onClick={btnBukaListModal}
          className={`py-2 px-4 ${
            disabled ? "bg-gray-400 cursor-not-allowed" : "bg-black"
          }`}
          disabled={disabled}
        >
          <p className="text-white">tambahkan list pembelian</p>
        </button>
      </div>

      {daftarPengeluaran.map((item, index) => (
        <div
          key={index}
          className="w-full flex items-center justify-between mt-2 p-2 border border-black rounded-2xl"
        >
          <div className="p-1">
            <p>{item.nama}</p>
            <p>{item.nominal}</p>
          </div>

          <div className="flex items-center justify-center gap-1">
            <button
              onClick={() => btnModalList(index)}
              className="flex items-center justify-center p-2"
            >
              <IconPencil className="w-6 h-6" />
            </button>
            <button
              onClick={() => btnModalDelete(index)}
              className="flex items-center justify-center p-2"
            >
              <IconTrash className="w-6 h-6" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DaftarList;
