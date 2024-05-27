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
import ModalDelete from "./ModalDelete";

const Savings = () => {
  const [membukaModal, mengaturMembukaModal] = useState(false);
  const [modalKonten, mengaturModalKonten] = useState<boolean>(true);
  const [nilaiInput, mengaturNilaiInput] = useState("");
  const [penghasilan, mengaturPenghasilan] = useState("0");
  const [targetPengeluaran, mengaturTargetPengeluaran] = useState("0");

  const [membukaListModal, mengaturMembukaListModal] = useState(false);
  const [namaList, mengaturNamaList] = useState("");
  const [nilaiNominal, mengaturNilaiNominal] = useState("");
  const [isEditing, mengaturIsEditing] = useState(false);
  const [editIndex, mengaturEditIndex] = useState<number | null>(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const [daftarPengeluaran, mengaturDaftarPengeluaran] = useState<
    { nama: string; nominal: string }[]
  >([]);

  const [errorMessage, mengaturErrorMessage] = useState(false);

  const modalTerbuka = (isPenghasilan: boolean) => {
    mengaturModalKonten(isPenghasilan);
    mengaturNilaiInput("");
    mengaturErrorMessage(false);
    mengaturMembukaModal(true);
  };

  const btnTutupModal = () => {
    mengaturMembukaModal(false);
    mengaturModalKonten(true);
  };

  const mengubahNilaiInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    mengaturNilaiInput(event.target.value);
  };

  const btnSave = () => {
    if (nilaiInput.trim() === "") {
      mengaturErrorMessage(true);
      return;
    }

    if (modalKonten) {
      mengaturPenghasilan(nilaiInput);
    } else {
      mengaturTargetPengeluaran(nilaiInput);
    }
    btnTutupModal();
  };

  const btnBukaListModal = () => {
    mengaturNamaList("");
    mengaturNilaiNominal("");
    mengaturIsEditing(false);
    mengaturErrorMessage(false);
    mengaturMembukaListModal(true);
  };

  const btnModalList = (index: number) => {
    mengaturNamaList(daftarPengeluaran[index].nama);
    mengaturNilaiNominal(daftarPengeluaran[index].nominal);
    mengaturIsEditing(true);
    mengaturEditIndex(index);
    mengaturErrorMessage(false);
    mengaturMembukaListModal(true);
  };

  const btnModalDelete = (index: number) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const hapusListItem = () => {
    if (deleteIndex !== null) {
      const newDaftar = [...daftarPengeluaran];
      newDaftar.splice(deleteIndex, 1);
      mengaturDaftarPengeluaran(newDaftar);
      setShowDeleteModal(false);
      setDeleteIndex(null);
    }
  };

  const btnSimpanList = () => {
    if (namaList.trim() === "") {
      mengaturErrorMessage(true);
      return;
    }

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
            onClick={() => modalTerbuka(true)}
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
            onClick={() => modalTerbuka(false)}
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
            <p>0</p>
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

      <ModalSavings
        membuka={membukaModal}
        konten={modalKonten}
        namaInput={nilaiInput}
        menutup={btnTutupModal}
        perubahan={mengubahNilaiInput}
        menyimpan={btnSave}
        errorMessage={errorMessage}
      />

      <ModalList
        membuka={membukaListModal}
        namaList={namaList}
        nilaiNominal={nilaiNominal}
        menutup={() => mengaturMembukaListModal(false)}
        perubahanNamaList={(event) => mengaturNamaList(event.target.value)}
        perubahanNilaiNominal={(event) =>
          mengaturNilaiNominal(event.target.value)
        }
        menyimpan={btnSimpanList}
        errorMessage={errorMessage}
        isEditing={isEditing}
      />

      <ModalDelete
        membuka={showDeleteModal}
        menutup={() => setShowDeleteModal(false)}
        mengonfirmasi={hapusListItem}
      />
    </div>
  );
};

export default Savings;
