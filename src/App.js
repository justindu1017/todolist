import "./index.css";
import Header from "./components/Header";
import JobLists from "./components/JobLists";
import Charts from "./components/Charts";
import { useState } from "react";

function App() {
  let taskList = [
    {
      id: 1,
      text: "task 1",
      level: 1,
    },
    {
      id: 2,
      text: "task 2",
      level: 2,
    },
    {
      id: 3,
      text: "task 3",
      level: 2,
    },
    {
      id: 4,
      text: "task 4",
      level: 3,
    },
  ];

  const [taskLists, setTaskList] = useState(taskList);

  return (
    <div className="flex flex-col">
      <Header userName="Justin" />
      <JobLists taskLists={taskLists} />
      <Charts taskLists={taskLists} />
    </div>
  );
}

export default App;
