import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/global/Navbar";

function App() {

  return (
    <>
        <Navbar />
        <Home />
    </>
  );
}

export default App;
