import { React, useEffect } from "react";

const AddTaskModal = ({
  addModalOpen,
  setAddModalOpen,
  taskLists,
  setTaskList,
}) => {
  const closeModal = () => {
    setAddModalOpen(false);
  };

  const confirmTaskAction = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const level = document.querySelector('input[name="level"]:checked');
    if (title == null || description == null || level == null) {
      alert("請將所有欄位都填寫");
      return;
    }
    const toAdd = {};
    toAdd.title = title;
    toAdd.description = description;
    toAdd.level = +level.value;
    toAdd.id = taskLists.length + 1;
    setTaskList([...taskLists, toAdd]);
    setAddModalOpen(false);
  };

  function validCheck(el) {
    if (/^\s/.test(el.value)) {
      el.value = "";
    }
  }

  useEffect(() => {
    const overlay = document.querySelector(".modal-overlay");
    const modalClose = document.querySelector(".modal-close");
    modalClose.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
  }, []);

  useEffect(() => {
    document.onkeydown = (e) => {
      e = e || window.event;
      var isEscape = false;
      if ("key" in e) {
        isEscape = e.key === "Escape" || e.key === "Esc";
      } else {
        isEscape = e.keyCode === 27;
      }
      if (isEscape && addModalOpen) {
        closeModal();
      }
    };
    return () => {};
  }, []);

  return (
    <div
      className="
      modal
      fixed
      w-full
      h-full
      top-0
      left-0
      flex
      items-center
      justify-center
    "
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div
        className="
        modal-container
        bg-white
        w-11/12
        md:max-w-md
        mx-auto
        rounded
        shadow-lg
        z-50
        overflow-y-auto
      "
      >
        <form className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Add Task</p>
            <div className="modal-close cursor-pointer z-50">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="title"
              onInput={(e) => {
                validCheck(e.target);
              }}
            ></input>
            <label className="block text-gray-700 text-sm font-bold mb-1 mt-3">
              Description
            </label>
            <textarea
              className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="description"
              cols="40"
              rows="5"
              onInput={(e) => {
                validCheck(e.target);
              }}
            ></textarea>
            <label className="block text-gray-700 text-sm font-bold mb-1 mt-3">
              Level
            </label>
            <input type="radio" id="level_1" name="level" value="1"></input>
            <label className="text-gray-700 text-sm pl-1 pr-2">Level 1</label>
            <input type="radio" id="level_2" name="level" value="2"></input>

            <label className="text-gray-700 text-sm pl-1 pr-2">Level 2</label>
            <input type="radio" id="level_3" name="level" value="3"></input>

            <label className="text-gray-700 text-sm pl-1 pr-2">Level 3</label>
          </div>

          <div className="flex justify-end pt-2">
            <button
              className="
            modal-close
            px-4
            bg-indigo-500
            p-3
            rounded-lg
            text-white
            hover:bg-indigo-400
          "
              type="submit"
              onClick={confirmTaskAction}
            >
              Confirm
            </button>
            <button
              className="
              pr-4
              bg-transparent
              p-3
              rounded-lg
              text-indigo-500
              hover:bg-gray-100 hover:text-indigo-400
              ml-2
            "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
