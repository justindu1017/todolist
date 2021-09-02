import JobList from "./JobList";

const JobLists = ({ taskLists, delEvent }) => {
  return (
    <div className="flex justify-center my-2">
      <div className="w-7/12 flex flex-col shadow-md bg-white rounded-md px-5 py-3">
        {taskLists.map((task) => {
          return <JobList key={task.id} task={task} delEvent={delEvent} />;
        })}
      </div>
    </div>
  );
};

export default JobLists;
