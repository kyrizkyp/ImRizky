import React from "react";
import { IconWallet, IconPlus } from "@tabler/icons-react";

interface PenghasilanProps {
  penghasilan: string;
  modalTerbuka: () => void;
}

const Penghasilan: React.FC<PenghasilanProps> = ({
  penghasilan,
  modalTerbuka,
}) => {
  return (
    <div className="flex items-center justify-center p-2 border border-black relative group">
      <div className="p-2">
        <IconWallet className="w-14 h-14 stroke-[0.5]" />
      </div>

      <div className="p-2 text-center">
        <h1>Penghasilan</h1>
        <p>Rp {penghasilan}</p>
      </div>

      <button
        onClick={modalTerbuka}
        className="absolute bg-black bg-opacity-50 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:duration-500"
      >
        <IconPlus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Penghasilan;
