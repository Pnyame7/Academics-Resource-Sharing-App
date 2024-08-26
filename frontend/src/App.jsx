import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import StudentDashboard from "./Pages/StudentDashboard";
import DiscussionForum from "./Pages/DiscussionForum";
import Feedback from "./Pages/Feedback";
import { useAuthContext } from "./Components/authContext";
function App() {
  const { auth } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        //  element={<Profile />} />
        element={auth ? <Profile /> : <Login />}
      />
      <Route
        path="/edit-profile"
        element={auth ? <EditProfile /> : <Login />}
      />
      <Route
        path="/student/dashboard"
        element={auth ? <StudentDashboard /> : <Login />}
        // element={<StudentDashboard />}
      />
      <Route
        path="/discussionforum"
        element={auth ? <DiscussionForum /> : <Login />}
      />
      <Route path="/feedback" element={auth ? <Feedback /> : <Login />} />
    </Routes>
  );
}

export default App;
