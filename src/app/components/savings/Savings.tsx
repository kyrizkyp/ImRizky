"use client";

import { IconStairsDown } from "@tabler/icons-react";
import React, { useState } from "react";
import ModalSavings from "./ModalSavings";
import ModalList from "./ModalList";
import ModalDelete from "./ModalDelete";
import Penghasilan from "./Penghasilan";
import Pengeluaran from "./Pengeluaran";
import DaftarList from "./DaftarList";

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
    if (namaList.trim() === "" || nilaiNominal.trim() === "") {
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

  const isDaftarListDisabled = penghasilan === "0" || targetPengeluaran === "0";

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-20 mb-10">
        <Penghasilan
          penghasilan={penghasilan}
          modalTerbuka={() => modalTerbuka(true)}
        />

        <Pengeluaran
          targetPengeluaran={targetPengeluaran}
          modalTerbuka={() => modalTerbuka(false)}
          disabled={penghasilan === "0"}
        />

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

      <DaftarList
        daftarPengeluaran={daftarPengeluaran}
        btnBukaListModal={btnBukaListModal}
        btnModalList={btnModalList}
        btnModalDelete={btnModalDelete}
        disabled={isDaftarListDisabled}
      />

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
