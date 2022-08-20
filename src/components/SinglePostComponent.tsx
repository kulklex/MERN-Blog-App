import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Context } from "../context/Context";
import { Post } from "../models/postModel";
import Spinner from "../pages/Spinner";

type Props = {
  post: Post[];
};

export default function SinglePostComponent({ post }: Props) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const postFetched = post.find((p) => p._id === path);
  const PublicFolder = "localhost:3000/images/";
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const changeStates = () => {
    setTitle(postFetched?.title || "");
    setDesc(postFetched?.desc || "");
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${postFetched?._id}`, {
        email: user?.user.email,
        title,
        desc,
      });
      window.location.reload();
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postFetched?._id}`, {
        data: { email: user?.user.email },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!postFetched) {
    return (
      <div className="singlePostComponent">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="singlePostComponent">
      <div className="singlePostCompWrapper flex flex-col p-5 pr-0">
        <img
          src={PublicFolder + postFetched.photo}
          alt=""
          className="singlePostImg w-4/5 h-1/2 md:h-full md:ml-16 rounded-lg object-cover"
        />{" "}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className=" text-xl m-2 font-serif text-center focus:outline-none"
            autoFocus
            onChange={(event: React.FormEvent<HTMLInputElement>) => {
              event.preventDefault();
              setTitle(event.currentTarget.value);
            }}
          />
        ) : (
          <h1 className="singlePostCompTitle text-center m-2 text-lg font-[lora]">
            {postFetched.title}

            {postFetched.email === user?.user.email && (
              <div className="singlePostCompEdit flex justify-end mr-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 singlePostCompIcon ml-2 cursor-pointer text-teal-500 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  onClick={() => {
                    changeStates();
                    setUpdateMode(true);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 singlePostCompIcon ml-2 cursor-pointer text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  onClick={handleDelete}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostCompInfo flex flex-col mb-5 justify-start text-sm text-yellow-700 font-[Varela] italic">
          <span className="singlePostCompAuthor">
            Author:{" "}
            <Link to={`/?user=${postFetched.email}`}>
              <b>{postFetched.email}</b>
            </Link>
          </span>
          <span className="singlePostCompDate mr-10">
            {new Date(postFetched.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <div className="flex flex-col justify-center text-center">
            <textarea
              className="text-sm  first-letter:text-lg first-letter:capitalize mr-10  border-none focus:outline-none  p-5 w-[80%] h-[100vh] md:my-8"
              value={desc}
              onChange={(event: React.FormEvent<HTMLTextAreaElement>) => {
                event.preventDefault();
                setDesc(event.currentTarget.value);
              }}
            />
            <button
              className="singlePostCompButton flex flex-col my-14 bg-blue-500 p-1 text-white border rounded-md justify-center object-center items-center self-center text-center"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        ) : (
          <div>
            <p className="singlePostCompDesc text-sm  first-letter:text-lg first-letter:capitalize mr-10">
              {postFetched.desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
