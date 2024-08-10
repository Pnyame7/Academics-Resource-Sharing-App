import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import StudentDashboard from "./Pages/StudentDashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
