const FilterButtons = ({ setfilter }) => {
  return (
    <section className="container mt-5 mb-5">
      <div className="text-center bg-light p-4 rounded shadow d-flex justify-content-center gap-3">
        <button className="btn btn-info" onClick={() => setfilter("All")}>
          All
        </button>
        <button
          className="btn btn-info "
          onClick={() => setfilter("Completed")}
        >
          Completed
        </button>
        <button className="btn btn-info" onClick={() => setfilter("Pending")}>
          Pending
        </button>
      </div>
    </section>
  );
};
export default FilterButtons;
