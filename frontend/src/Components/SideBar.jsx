import "../Css/studentDashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faUser,
  faGrip,
  faComments,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
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
    <div className="h-screen overflow-y-auto overflow-x-hidden sticky top-0 bg-blue-500 w-56">
      <nav className="">
        <p className="text-xl bg-gray-100 text-center">Student Dashboard</p>
        <ul>
          <li className="hover:text-red-400 hover:bg-white">
            <Link to="/student/dashboard" className="navSide">
              <FontAwesomeIcon icon={faGrip} className="navSideIcons" />
              <span className="navSideText">Dashboard</span>
            </Link>
          </li>
          <li className="hover:text-red-400 hover:bg-white">
            <Link to="/discussionforum" className="navSide">
              <FontAwesomeIcon icon={faComments} className="navSideIcons" />
              <span className="navSideText">Discussion Forum</span>
            </Link>
          </li>
          <li className="hover:text-red-400 hover:bg-white">
            <Link to="/feedback" className="navSide">
              <FontAwesomeIcon icon={faTicket} className="navSideIcons" />
              <span className="navSideText">Feedback & Support</span>
            </Link>
          </li>
          <li className="hover:text-red-400 hover:bg-white">
            <Link to="/profile" className="navSide">
              <FontAwesomeIcon icon={faUser} className="navSideIcons" />
              <span className="navSideText">Profile</span>
            </Link>
          </li>
          <li className="hover:text-red-400 hover:bg-white">
            <Link to="/edit-profile" className="navSide">
              <FontAwesomeIcon icon={faUser} className="navSideIcons" />
              <span className="navSideText">Edit Profile</span>
            </Link>
          </li>
          <li className="hover:text-red-400 hover:bg-white">
            <button onClick={handleLogout} className="navSide">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="navSideIcons"
              />
              <span className="navSideText">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
