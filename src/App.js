import "./index.css";
import Header from "./components/Header";
import JobLists from "./components/JobLists";
import Charts from "./components/Charts";
import EmptyTask from "./components/EmptyTask";
import AddTaskModal from "./components/AddTaskModal";
import { useState } from "react";

function App() {
  let taskList = [
    {
      id: 1,
      title: "Task 1",
      description: "this is task 1",
      level: 1,
    },
    {
      id: 2,
      title: "Task 2",
      description: "this is task 2",
      level: 2,
    },
    {
      id: 3,
      title: "Task 3",
      description: "this is task 3",
      level: 2,
    },
    {
      id: 4,
      title: "Task 4",
      description: "this is task 4",
      level: 3,
    },
  ];

  const [taskLists, setTaskList] = useState(taskList);

  const delEvent = (id) => {
    setTaskList(
      taskLists.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <Header
        userName="Justin"
        taskLength={taskLists.length}
        addModalOpen={addModalOpen}
        setAddModalOpen={setAddModalOpen}
      />
      {taskLists.length == 0 ? (
        <EmptyTask />
      ) : (
        <JobLists taskLists={taskLists} delEvent={delEvent} />
      )}
      <Charts taskLists={taskLists} />

      {addModalOpen ? (
        <AddTaskModal
          addModalOpen={addModalOpen}
          setAddModalOpen={setAddModalOpen}
          taskLists={taskLists}
          setTaskList={setTaskList}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
