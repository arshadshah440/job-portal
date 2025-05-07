import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/global/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./components/pages/JobList";
import AddJob from "./components/pages/AddJob";
import JobDetails from "./components/pages/JobDetails";
import Companies from "./components/pages/Companies";
import CompanyDetails from "./components/pages/CompanyDetails";
import Register from "./components/pages/Register";
import ProtectedRoute from "./components/features/ProtectedRoute";
import { validateAuth } from "./app/features/auth/registerSlice";
import { useDispatch } from "react-redux";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validateAuth());
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route
          path="/add-job"
          element={
            <ProtectedRoute>
              {" "}
              <AddJob />
            </ProtectedRoute>
          }
        />
        <Route path="/jobs/:slug" element={<JobDetails />} />
        <Route path="/companies/" element={<Companies />} />
        <Route path="/company/:slug" element={<CompanyDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              {" "}
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
