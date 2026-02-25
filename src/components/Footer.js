const Footer = ({ completestatus }) => {
  return (
    <section className="container mt-5 mb-5">
      <div className="text-center bg-light p-4 rounded shadow">
        <span className="fw-bold fs-4">{completestatus}%</span> Completed
      </div>
    </section>
  );
};

export default Footer;
