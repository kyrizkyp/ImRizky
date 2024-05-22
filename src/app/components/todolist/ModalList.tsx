import React from "react";

interface ModalListProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: string, date: string) => void;
}

const ModalList: React.FC<ModalListProps> = ({ isOpen, onClose, onSave }) => {
  const [task, setTask] = React.useState("");
  const [date, setDate] = React.useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4">Add New Task</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Task
          </label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              onSave(task, date);
              setTask("");
              setDate("");
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalList;
