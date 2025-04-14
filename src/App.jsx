import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/global/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./components/home/JobList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
      </Routes>
    </Router>
  );
}

export default App;
