import { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";

export default function Profile() {
  const [user, setUser] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  // const navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/account/profile", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (error) {
        enqueueSnackbar(error.response.data.msg, { variant: "error" });
      }
    };
    fetchProfile();
  }, [enqueueSnackbar]);
  return (
    <div>
      <div className="sidebar_container">
        <SideBar />
        <div className="main-content">
          {/* ALl code inside this div */}
          <h1 className="text-2xl md:text-3xl font-bold text-center my-4 sm:my-10">
            Personal Details
          </h1>
          <div className="flex flex-col items-center justify-center w-10/12 md:w-2/3 xl:w-1/2 mx-auto bg-white rounded-2xl shadow-2xl">
            <div className="flex flex-col items-center rounded-full overflow-hidden border-2 border-red-400 w-32 h-32 md:w-40 md:h-40 mx-auto bg-secondary-100 mt-5">
              {user.image !== "" ? (
                <img
                  src={`http://localhost:3000/uploads/${user.image}`}
                  alt="profile"
                  className="w-32 h-32 md:w-52 md:h-52 object-contain"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                />
              )}
            </div>
            <div className="my-2 sm:my-3 w-10/12 md:w-2/3 xl:w-1/2">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                value={user.username}
                placeholder="Username"
                className="loginInput"
                disabled
              />
            </div>
            <div className="my-2 sm:my-3 w-10/12 md:w-2/3 xl:w-1/2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Email"
                className="loginInput"
                disabled
              />
            </div>
            <div className="my-2 sm:my-3 w-10/12 md:w-2/3 xl:w-1/2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                name="phone"
                value={user.phone}
                placeholder="Phone"
                className="loginInput"
                disabled
              />
            </div>
            <div className="my-2 sm:my-3 w-10/12 md:w-2/3 xl:w-1/2">
              <label htmlFor="studentID">StudentID</label>
              <input
                type="number"
                name="studentID"
                id="studentID"
                value={user.studentID}
                placeholder="studentID"
                className="loginInput"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
