import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
