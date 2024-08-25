import { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";
import { formatCreationTime } from "../Components/extractTime";
import DiscussionMessages from "../Components/DiscussionMessages";
import SendMessage from "../Components/SendMessage";

export default function DiscussionForum() {
  const [topics, setTopics] = useState([]);
  const [showPost, setShowPost] = useState("");
  const [topicName, setTopicName] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [sendId, setSendId] = useState(null);
  const [userObject, setUserObject] = useState({});
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/info/get-topic`, {
          withCredentials: true,
        });
        setTopics(res.data);
      } catch (error) {
        enqueueSnackbar(error.response.data.msg, { variant: "error" });
      }
    };
    fetchTopics();
  }, [enqueueSnackbar]);

  const handleCreateTopic = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/info/create-topic",
        {
          topicName,
        },
        { withCredentials: true }
      );
      enqueueSnackbar(res.data.msg, { variant: "success" });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      setShowPost(false);
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.response.data.msg, { variant: "error" });
    }
  };

  return (
    <div>
      {/* {true && ( */}
      {showPost && (
        <>
          <div className="fixed bg-black bg-opacity-50 h-screen w-screen flex justify-center items-center z-10">
            <form
              className="bg-white p-5 rounded-md flex flex-col w-1/3 -translate-y-1/2"
              onSubmit={handleCreateTopic}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="text-xl hover:text-red-600 transition-all ease-in-out duration-500 self-end mb-1"
                onClick={() => setShowPost(false)}
              />
              <input
                placeholder="Type a Topic"
                className="border border-black rounded-md p-2 "
                value={topicName}
                onChange={(e) => setTopicName(e.target.value)}
              />
              <button
                className="bg-green-700 p-2 w-20 my-2 mx-auto rounded-lg hover:text-white"
                // onClick={handleCreateTopic}
              >
                Sumbit
              </button>
            </form>
          </div>{" "}
        </>
      )}
      <div className="sidebar_container">
        <SideBar />
        <div className="w-full flex items-center">
          <div className="w-1/4 h-[40rem] border-red-500 border rounded-lg overflow-y-auto">
            <div className="flex justify-between px-3 py-2 bg-gray-300 items-center sticky top-0 border-b border-green-400">
              <p className="text-lg font-bold">Topics</p>
              <FontAwesomeIcon
                icon={faSquarePlus}
                className="text-xl hover:text-green-600 transition-all ease-in-out duration-500"
                onClick={() => setShowPost(true)}
              />
            </div>
            <div>
              {topics.map((topic, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedTopic(topic.topicName);
                    setSendId(topic._id);
                    setUserObject(topic);
                  }}
                  className={`${
                    selectedTopic === topic.topicName
                      ? "bg-orange-400"
                      : "bg-gray-100"
                  } cursor-pointer h-14 my-1 p-2 flex flex-col`}
                >
                  <p>{topic.topicName}</p>
                  <p className="self-end text-sm text-green-700">
                    {formatCreationTime(topic.updatedAt)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-3/4 border-yellow-500 border h-[40rem] mx-4 rounded-md overflow-y-auto">
            {selectedTopic ? (
              <div className="relative">
                <DiscussionMessages
                  selectedTopic={sendId}
                  userObject={userObject}
                />
                <SendMessage selectedTopic={sendId} />
              </div>
            ) : (
              <p>Select a topic to continues</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
