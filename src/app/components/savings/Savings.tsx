"use client";

import {
  IconPencil,
  IconPlus,
  IconStairsDown,
  IconStairsUp,
  IconTrash,
  IconWallet,
} from "@tabler/icons-react";
import React, { useState } from "react";
import ModalSavings from "./ModalSavings";
import ModalList from "./ModalList";

const Savings = () => {
  const [membukaModal, mengaturMembukaModal] = useState(false);
  const [modalKonten, mengaturModalKonten] = useState("");
  const [nilaiInput, mengaturNilaiInput] = useState("");
  const [penghasilan, mengaturPenghasilan] = useState("0");
  const [targetPengeluaran, mengaturTargetPengeluaran] = useState("0");
  const [totalPengeluaran, mengaturTotalPengeluaran] = useState("0");

  const [membukaListModal, mengaturMembukaListModal] = useState(false);
  const [namaList, mengaturNamaList] = useState("");
  const [nilaiNominal, mengaturNilaiNominal] = useState("");
  const [isEditing, mengaturIsEditing] = useState(false);
  const [editIndex, mengaturEditIndex] = useState<number | null>(null);
  const [daftarPengeluaran, mengaturDaftarPengeluaran] = useState<
    { nama: string; nominal: string }[]
  >([]);

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

  const btnBukaListModal = () => {
    mengaturNamaList("");
    mengaturNilaiNominal("");
    mengaturIsEditing(false);
    mengaturMembukaListModal(true);
  };

  const btnEditList = (index: number) => {
    mengaturNamaList(daftarPengeluaran[index].nama);
    mengaturNilaiNominal(daftarPengeluaran[index].nominal);
    mengaturIsEditing(true);
    mengaturEditIndex(index);
    mengaturMembukaListModal(true);
  };

  const btnHapusList = (index: number) => {
    const newDaftar = [...daftarPengeluaran];
    newDaftar.splice(index, 1);
    mengaturDaftarPengeluaran(newDaftar);
  };

  const btnSimpanList = () => {
    if (isEditing && editIndex !== null) {
      const newDaftar = [...daftarPengeluaran];
      newDaftar[editIndex] = { nama: namaList, nominal: nilaiNominal };
      mengaturDaftarPengeluaran(newDaftar);
    } else {
      mengaturDaftarPengeluaran([
        ...daftarPengeluaran,
        { nama: namaList, nominal: nilaiNominal },
      ]);
    }
    mengaturMembukaListModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-20 mb-10">
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

      <div className="max-w-sm w-full flex flex-col items-center justify-center mt-10">
        <div className="self-start mb-2">
          <p className="py-2">Daftar pengeluaran</p>

          <button onClick={btnBukaListModal} className="py-2 px-4 bg-black">
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

            <div className="flex items-center justify-center gap-4 p-1">
              <button onClick={() => btnEditList(index)}>
                <IconPencil className="stroke-[0.5]" />
              </button>

              <button onClick={() => btnHapusList(index)}>
                <IconTrash className="stroke-[0.5]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <ModalSavings
        membuka={membukaModal}
        konten={modalKonten}
        namaInput={nilaiInput}
        menutup={btnTutupModal}
        perubahan={mengubahNilaiInput}
        menyimpan={btnSave}
      />

      <ModalList
        membuka={membukaListModal}
        menutup={() => mengaturMembukaListModal(false)}
        namaList={namaList}
        nilaiNominal={nilaiNominal}
        perubahanNamaList={(e) => mengaturNamaList(e.target.value)}
        perubahanNilaiNominal={(e) => mengaturNilaiNominal(e.target.value)}
        menyimpan={btnSimpanList}
      />
    </div>
  );
};

export default Savings;
