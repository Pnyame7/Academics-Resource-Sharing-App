import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import SideBar from "../Components/SideBar";
import { formatCreationTime } from "../Components/extractTime";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/info/get-feedback`, {
          withCredentials: true,
        });
        setFeedbacks(res.data);
      } catch (error) {
        enqueueSnackbar(error.response.data.msg, { variant: "error" });
      }
    };
    fetchFeedback();
  }, [enqueueSnackbar]);

  const handleSendFeedback = async (e) => {
    e.preventDefault();
    if (topic === "" || message === "") {
      enqueueSnackbar("Topic or Message can't be empty", { variant: "error" });
      return;
    }
    try {
      const res = await axios.post(
        `http://localhost:3000/info/create-feedback`,
        { topic, message },
        { withCredentials: true }
      );
      enqueueSnackbar(res.data.msg, { variant: "success" });
      setTopic("");
      setMessage("");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      enqueueSnackbar(error.response.data.msg, { variant: "error" });
    }
  };
  return (
    <div>
      <div class="sidebar_container">
        <SideBar />
        <div class="w-full relative mx-3 mt-3">
          {/* Show Feedback */}
          <div className="border border-red-400 overflow-y-auto h-[32rem] my-2 rounded-md overflow-hidden">
            {feedbacks.map((feedback, index) => (
              <div key={index} className="bg-gray-100 m-2 p-2 rounded-md">
                <div className="flex items-center bg-white">
                  <p>{feedback.userId.username}</p>
                  <p className="text-xs ml-5 italic">
                    {formatCreationTime(feedback.createdAt)}
                  </p>
                </div>
                <p className="font-semibold">{feedback.topic}</p>
                <p className="whitespace-pre-line">{feedback.message}</p>
              </div>
            ))}
          </div>
          {/* Send Feedback */}
          <div className="bg-gray-100 p-2 rounded-lg self-stretch flex items-center border-black border sticky bottom-0">
            <div className="w-full">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Type topic of feedback here"
                className="w-full p-2 mb-1"
              />
              <textarea
                className="h-20 w-full p-2 mt-1"
                type="text"
                id="description"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your feedback here"
                style={{ resize: "none" }}
              />
            </div>
            <button
              onClick={handleSendFeedback}
              className="mx-2 p-2 bg-red-400 text-white border-red-400 border hover:bg-white hover:text-red-400 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
