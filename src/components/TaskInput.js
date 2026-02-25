import { useEffect, useState } from "react";

const TaskInput = ({ addTask, taskstatus, settaskstatus, editid, tasks }) => {
  const [Title, setTitle] = useState("");
  useEffect(() => {
    if (taskstatus === "edit") {
      const task = tasks.find((t) => t.id === editid);
      setTitle(task.title);
    } else {
      setTitle("");
    }
  }, [taskstatus, editid, tasks]);

  const handleAddTask = () => {
    addTask(Title);
    setTitle("");
  };
  return (
    <section className="container mt-5 mb-5 bg-light p-4 rounded shadow">
      <div className="d-flex justify-content-center gap-3 ">
        <input
          type="text"
          value={Title}
          className="form-control w-25"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddTask} className="btn btn-primary">
          {taskstatus === "add" ? "Add Task" : "Update Task"}
        </button>
      </div>
    </section>
  );
};

export default TaskInput;
