const TaskList = ({
  tasks,
  deleteTask,
  toggleStatus,
  settaskstatus,
  seteditid,
}) => {
  const updaterecord = (id) => {
    seteditid(id);
    settaskstatus("edit");
  };
  return (
    <section className="container mt-5 mb-5 text-center bg-light p-4 rounded shadow">
      <h2>Task List</h2>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.No.</th>
              <th></th>
              <th>Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={task.Status || false}
                    onChange={() => toggleStatus(task.id)}
                  />
                </td>
                <td>{task.title}</td>
                <td>{task.Status ? "Completed" : "Pending"}</td>
                <td>{task.date}</td>
                <td>
                  <button
                    className="btn btn-warning ms-2 me-2"
                    onClick={() => updaterecord(task.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default TaskList;
