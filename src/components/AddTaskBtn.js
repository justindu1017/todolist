import React from "react";

const AddTaskBtn = ({ addModalOpen, setAddModalOpen }) => {
  return (
    <div className="inline-block w-1/5">
      <button
        onClick={() => setAddModalOpen(!addModalOpen)}
        className="px-2 py-1 rounded-md bg-yellow-200 text-red-600 font-bold hover:bg-yellow-100"
      >
        ADD
      </button>
    </div>
  );
};

export default AddTaskBtn;
