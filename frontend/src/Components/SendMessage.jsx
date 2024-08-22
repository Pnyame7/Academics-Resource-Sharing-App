import { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMessage,
  faCheck,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function SendMessage({ selectedTopic }) {
  const [sendMessage, setSendMessage] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const id = selectedTopic;
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (sendMessage === "") {
      enqueueSnackbar("Comment can't be empty", { variant: "error" });
      return;
    }
    try {
      const res = await axios.post(
        `http://localhost:3000/info/create-message/${id}`,
        { message: sendMessage },
        { withCredentials: true }
      );
      enqueueSnackbar(res.data.msg, { variant: "success" });
      setSendMessage("");
    } catch (error) {
      enqueueSnackbar(error.response.data.msg, { variant: "error" });
    }
  };
  console.log("Id is:", id);
  return (
    <div className="sticky top-0 m-2">
      <div className="bg-gray-100 p-2 rounded-lg self-stretch flex items-center border-black border">
        <textarea
          className="h-20 w-full p-2"
          type="text"
          id="description"
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
          placeholder="Add a message"
          style={{ resize: "none" }}
        />
        <button
          onClick={handleSendMessage}
          className="mx-2 p-2 bg-red-400 text-white border-red-400 border hover:bg-white hover:text-red-400 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
