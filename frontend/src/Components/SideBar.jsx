import "../Css/studentDashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../Components/authContext";

export default function SideBar() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  // const { auth } = useAuthContext();
  const { setAuth } = useAuthContext();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/account/logout", {
        withCredentials: true,
      });
      localStorage.removeItem("auth");
      setAuth(null);
      navigate("/login");
    } catch (error) {
      enqueueSnackbar(error.response.data.msg, { variant: "error" });
    }
  };
  return (
    <div>
      <nav className="studentNav">
        <p>Student Dashboard</p>
        <ul>
          <li>
            <Link to="/student/dashboard">
              <img
                src="/Assets/Images/Dashboard.png"
                alt=""
                class="dashboard"
              />
              <span class="img-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src="/Assets/Images/Forum.png" alt="" class="forum" />
              <span class="img-text">Discussion Forum</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <img
                src="/Assets/Images/Notification.png"
                alt=""
                class="notification"
              />
              <span class="img-text">Notification</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <img
                src="/Assets/Images/Notification.png"
                alt=""
                class="notification"
              />
              <span class="img-text">Study Group</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <img
                src="/Assets/Images/Notification.png"
                alt=""
                class="notification"
              />
              <span class="img-text">Feedback & Support</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <img
                src="/Assets/Images/Notification.png"
                alt=""
                class="notification"
              />
              <span class="img-text">Upload Resource</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img
                src="/Assets/Images/Notification.png"
                alt=""
                class="notification"
              />
              <span class="img-text">Profile</span>
            </Link>
          </li>
          <li>
            <button onClick={handleLogout}>
              <img src="/Assets/Images/Logout.png" alt="" class="logout" />
              <span class="img-text">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
