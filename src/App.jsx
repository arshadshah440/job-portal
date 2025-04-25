import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/global/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./components/pages/JobList";
import AddJob from "./components/pages/AddJob";
import JobDetails from "./components/pages/JobDetails";
import Companies from "./components/pages/Companies";
import CompanyDetails from "./components/pages/CompanyDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/companies/" element={<Companies />} />
        <Route path="/company/:slug" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
