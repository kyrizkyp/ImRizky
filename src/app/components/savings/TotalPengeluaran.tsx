import React from "react";
import { IconStairsDown } from "@tabler/icons-react";

interface TotalPengeluaranProps {
  totalPengeluaran: string;
  formatRupiah: (angka: string) => string;
}

const TotalPengeluaran: React.FC<TotalPengeluaranProps> = ({
  totalPengeluaran,
  formatRupiah,
}) => {
  return (
    <div className="flex items-center justify-center p-2 border border-black relative group">
      <div className="p-2">
        <IconStairsDown className="w-14 h-14 stroke-[0.5]" />
      </div>

      <div className="p-2 text-center">
        <h1>Total pengeluaran</h1>
        <p>Rp {formatRupiah(totalPengeluaran)}</p>
      </div>
    </div>
  );
};

export default TotalPengeluaran;
