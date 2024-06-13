export default function Header({ onSearch ,onNext,onPrevious ,results}) {
  return (
    <nav className="navbar  d-flex align-items-center gap-2">
      <div className="flex-grow-1 ">
        <input
          onChange={(e) => {
            onSearch(e.target.value.trim());
          }}
          className="form-control form-control-sm  border-secondary"
          type="text"
          placeholder="Search..."
          style={{ boxShadow: "none" }}
        />
      </div>
      <ul className="pagination pagination-sm mb-0">
        <li className="page-item">
        <button disabled={results === 10 ? true : false} onClick={onPrevious} className="btn btn-sm btn-primary" href="#" style={{boxShadow:"none"}}>
            Prev
          </button>
        </li>
        <li className="page-item">
          <button disabled={results === 100 ? true : false}  onClick={onNext} className="btn btn-sm btn-primary ms-2" href="#"  style={{boxShadow:"none"}}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
