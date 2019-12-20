import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import Book from "./components/Book";

function App() {
  const [currentPage, setPage] = useState("home");

  const bookPage = () => {
    setPage("book");
  };

  return (
    <div className="App">
      <Sidebar />
      {currentPage === "home" && <Homepage bookPage={bookPage} />}
      {currentPage === "book" && <Book />}
    </div>
  );
}

export default App;
