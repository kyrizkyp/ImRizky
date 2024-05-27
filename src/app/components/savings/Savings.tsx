"use client";

import {
  IconPlus,
  IconStairsDown,
  IconStairsUp,
  IconWallet,
} from "@tabler/icons-react";
import React, { useState } from "react";
import ModalSavings from "./ModalSavings";

const Savings = () => {
  const [membukaModal, mengaturMembukaModal] = useState(false);
  const [modalKonten, mengaturModalKonten] = useState("");
  const [nilaiInput, mengaturNilaiInput] = useState("");
  const [penghasilan, mengaturPenghasilan] = useState("1.000.000");
  const [targetPengeluaran, mengaturTargetPengeluaran] = useState("1.000.000");
  const [totalPengeluaran, mengaturTotalPengeluaran] = useState("0");

  const modalTerbuka = (konten: React.SetStateAction<string>) => {
    mengaturModalKonten(konten);
    mengaturNilaiInput("");
    mengaturMembukaModal(true);
  };

  const btnTutupModal = () => {
    mengaturMembukaModal(false);
    mengaturModalKonten("");
  };

  const mengubahNilaiInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    mengaturNilaiInput(event.target.value);
  };

  const btnSave = () => {
    if (modalKonten === "Penghasilan") {
      mengaturPenghasilan(nilaiInput);
    } else if (modalKonten === "Target pengeluaran") {
      mengaturTargetPengeluaran(nilaiInput);
    } else if (modalKonten === "Total pengeluaran") {
      mengaturTotalPengeluaran(nilaiInput);
    }
    btnTutupModal();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center gap-20">
        <div className="flex items-center justify-center p-2 border border-black relative group">
          <div className="p-2">
            <IconWallet className="w-14 h-14 stroke-[0.5]" />
          </div>

          <div className="p-2 text-center">
            <h1>Penghasilan</h1>
            <p>{penghasilan}</p>
          </div>

          <button
            onClick={() => modalTerbuka("Penghasilan")}
            className="absolute bg-black bg-opacity-50 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:duration-500"
          >
            <IconPlus className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex items-center justify-center p-2 border border-black relative group">
          <div className="p-2">
            <IconStairsUp className="w-14 h-14 stroke-[0.5]" />
          </div>

          <div className="p-2 text-center">
            <h1>Target pengeluaran</h1>
            <p>{targetPengeluaran}</p>
          </div>

          <button
            onClick={() => modalTerbuka("Target pengeluaran")}
            className="absolute bg-black bg-opacity-50 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:duration-500"
          >
            <IconPlus className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex items-center justify-center p-2 border border-black relative group">
          <div className="p-2">
            <IconStairsDown className="w-14 h-14 stroke-[0.5]" />
          </div>

          <div className="p-2 text-center">
            <h1>Total pengeluaran</h1>
            <p>{totalPengeluaran}</p>
          </div>
        </div>
      </div>

      <ModalSavings
        membuka={membukaModal}
        konten={modalKonten}
        namaInput={nilaiInput}
        menutup={btnTutupModal}
        perubahan={mengubahNilaiInput}
        menyimpan={btnSave}
      />
    </div>
  );
};

export default Savings;
