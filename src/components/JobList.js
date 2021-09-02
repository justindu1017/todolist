import { BiCheck } from "react-icons/bi";

const JobList = ({ task, delEvent }) => {
  const styleAttr = () => {
    const level = task.level;
    const color =
      level === 1
        ? "bg-green-300"
        : level === 2
        ? "bg-yellow-300"
        : level === 3
        ? "bg-red-600"
        : "bg-purple-400";

    return "flex shadow-sm rounded-md m-2 p-3 " + color;
  };

  return (
    <div className={styleAttr()}>
      <div className="flex-col flex-grow-6">
        <h1 className="text-lg">{task.title}</h1>
        <div>{task.description}</div>
      </div>
      <div className=" flex flex-grow-1 text-5xl justify-center">
        <BiCheck
          className="rounded-lg hover:bg-purple-400 hover:shadow-lg"
          onClick={() => delEvent(task.id)}
        />
      </div>
    </div>
  );
};

export default JobList;
