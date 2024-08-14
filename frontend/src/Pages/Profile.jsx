import { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";

export default function Profile() {
  const [user, setUser] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
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
      <div class="sidebar_container">
        <SideBar />
        <div class="main-content">
          {/* ALl code inside this div */}
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>0{user.phone}</p>
          <p>{user.studentID}</p>
        </div>
      </div>
    </div>
  );
}
