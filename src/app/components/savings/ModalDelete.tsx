import React from "react";

interface ModalDeleteProps {
  membuka: boolean;

  menutup: () => void;
  mengonfirmasi: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  membuka,

  menutup,
  mengonfirmasi,
}) => {
  return (
    <div
      className={`fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        membuka ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg">
        <p className="mb-4">Hapus list ini?</p>
        <div className="flex justify-between">
          <button
            onClick={menutup}
            className="px-4 py-2 bg-gray-300 rounded-md mr-2"
          >
            Batal
          </button>
          <button
            onClick={mengonfirmasi}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
