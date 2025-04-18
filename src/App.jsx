import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/global/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./components/home/JobList";
import AddJob from "./components/home/AddJob";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </Router>
  );
}

export default App;
