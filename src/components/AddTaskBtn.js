import React from "react";

const AddTaskBtn = () => {
  const onClick = () => {
    console.log("btn Clicked");
  };

  return (
    <div className="flex justify-end pr-5">
      <button
        onClick={onClick}
        className="px-2 py-1 rounded-md bg-yellow-100 text-red-600 font-bold"
      >
        ADD
      </button>
    </div>
  );
};

export default AddTaskBtn;
