import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import SearchBar from "./components/SearchBar";
import { useEffect, useMemo, useState } from "react";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [filter, setfilter] = useState("All");
  const [searchQuery, setsearchQuery] = useState("");
  const [taskstatus, settaskstatus] = useState("add");
  const [editid, seteditid] = useState(null);

  const [tasks, setTasks] = useState(() => {
    const SavedTasks = localStorage.getItem("Tasks") || "[]";
    return JSON.parse(SavedTasks);
  });

  const filterTasks = useMemo(() => {
    let result = tasks;
    if (filter === "Completed") {
      result = tasks.filter((task) => task.Status === true);
    }
    if (filter === "Pending") {
      result = tasks.filter((task) => task.Status === false);
    }
    if (searchQuery.trim() !== "") {
      result = result.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return result;
  }, [tasks, filter, searchQuery]);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deletetask = (id) => {
    const res = window.confirm("Are you sure you want to delete this task?");
    if (res) {
      const updateTask = tasks.filter((taskid) => taskid.id !== id);
      setTasks(updateTask);
    }
  };
  const completestatus = useMemo(() => {
    if (tasks.length === 0) {
      return 0;
    }
    const completedTasks = tasks.filter((task) => task.Status === true);

    const percentage = (completedTasks.length / tasks.length) * 100;

    return percentage.toFixed(2);
  }, [tasks]);
  const toggleStatus = (id) => {
    const res = window.confirm(
      "Are you sure you want to change the status of this task?",
    );
    if (res) {
      setTasks((PrevTasks) =>
        PrevTasks.map((task) =>
          task.id === id ? { ...task, Status: !task.Status } : task,
        ),
      );
    }
  };
  const addTask = (titleval) => {
    if (editid) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editid ? { ...task, title: titleval } : task,
        ),
      );
      seteditid(null);
      settaskstatus("add");
    } else {
      const newTask = {
        id: Date.now(),
        title: titleval,
        Status: false,
        date: new Date().toLocaleDateString(),
      };

      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
    }
  };
  return (
    <>
      <Header />

      <TaskInput
        addTask={addTask}
        taskstatus={taskstatus}
        settaskstatus={settaskstatus}
        editid={editid}
        tasks={tasks}
      />
      <SearchBar searchQuery={searchQuery} setsearchQuery={setsearchQuery} />
      <FilterButtons filter={filter} setfilter={setfilter} />
      <TaskList
        tasks={filterTasks}
        deleteTask={deletetask}
        toggleStatus={toggleStatus}
        settaskstatus={settaskstatus}
        seteditid={seteditid}
      />
      <Footer completestatus={completestatus} />
    </>
  );
}

export default App;
