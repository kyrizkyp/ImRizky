import React from "react";
import { IconStairsUp, IconPlus } from "@tabler/icons-react";

interface PengeluaranProps {
  targetPengeluaran: string;
  modalTerbuka: () => void;
  disabled: boolean; // New prop to handle the disabled state
}

const Pengeluaran: React.FC<PengeluaranProps> = ({
  targetPengeluaran,
  modalTerbuka,
  disabled,
}) => {
  return (
    <div
      className={`flex items-center justify-center p-2 border border-black relative group ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <div className="p-2">
        <IconStairsUp className="w-14 h-14 stroke-[0.5]" />
      </div>

      <div className="p-2 text-center">
        <h1>Target pengeluaran</h1>
        <p>Rp {targetPengeluaran}</p>
      </div>

      {!disabled && (
        <button
          onClick={modalTerbuka}
          className="absolute bg-black bg-opacity-50 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:duration-500"
        >
          <IconPlus className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default Pengeluaran;
