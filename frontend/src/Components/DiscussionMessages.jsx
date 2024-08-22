import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { dateOnly, timeOnly, formatCreationTime } from "./extractTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTriangleExclamation,
  faChevronLeft,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function DiscussionMessages({
  selectedTopic,
  userObject,
  className,
}) {
  const [messages, setMessages] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const id = selectedTopic;
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/info/get-message/${id}`,
          {
            withCredentials: true,
          }
        );
        setMessages(res.data);
      } catch (error) {
        enqueueSnackbar(error.response.data.msg, { variant: "error" });
      }
    };
    fetchMessages();
  }, [id, enqueueSnackbar]);
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  let lastDisplayedDate = "";
  return (
    <div className="bg-gray-100 h-[32.7rem] overflow-y-auto">
      {messages.length === 0 ? (
        <div>
          <p className="text-center">No message here</p>
          <p className="text-center">Be the first to post a message</p>
        </div>
      ) : (
        messages.map((message) => {
          const messageDate = dateOnly(message.createdAt);
          const displayDate = messageDate !== lastDisplayedDate;
          lastDisplayedDate = messageDate;
          return (
            <div
              key={message._id}
              className="flex p-2 mt-2"
              ref={lastMessageRef}
            >
              <div className="ml-4 w-10/12 relative">
                {displayDate && <p className="text-center">{messageDate}</p>}
                <p className="text-primary-400 font-bold w-full">
                  {message.userId.username}
                </p>
                <p className="whitespace-pre-wrap">{message.message}</p>
                <p className="absolute text-sm text-gray-400 right-0">
                  <span>
                    <FontAwesomeIcon icon={faClock} className="mr-1" />
                    {timeOnly(message.createdAt)}
                  </span>
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
