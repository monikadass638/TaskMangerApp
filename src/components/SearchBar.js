const SearchBar = ({ searchQuery, setsearchQuery }) => {
  return (
    <section className="container mt-5 mb-5 text-center bg-light p-4 rounded shadow">
      <h2>Search Tasks</h2>
      <div className="d-flex justify-content-center gap-3">
        <input
          type="text"
          value={searchQuery}
          className="form-control w-25"
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => setsearchQuery("")}>
          Clear
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
