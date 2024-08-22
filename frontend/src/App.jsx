import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import StudentDashboard from "./Pages/StudentDashboard";
import DiscussionForum from "./Pages/DiscussionForum";
import { useAuthContext } from "./Components/authContext";
function App() {
  const { auth } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/student/dashboard"
        // element={auth ? <StudentDashboard /> : <Login />}
        element={<StudentDashboard />}
      />
      <Route path="/discussionforum" element={<DiscussionForum />} />
    </Routes>
  );
}

export default App;
