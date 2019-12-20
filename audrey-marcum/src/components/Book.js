import React, { useState } from "react";
import "./book.scss";

function Book(props) {
  const [page, setPage] = useState(1);

  const incPage = () => {
    setPage(page + 1);
  };

  const decPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="book-container">
      <div className="text-container">
        {page === 1 && <p>Test page 1</p>}
        {page === 2 && <p>Test page 2</p>}
      </div>
      <div className="button-container">
        <button onclick={decPage}>&lsaquo;</button>
        <button onClick={incPage}>&rsaquo;</button>
      </div>
    </div>
  );
}

export default Book;
