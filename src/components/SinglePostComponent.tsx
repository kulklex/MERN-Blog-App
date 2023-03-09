import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Context } from "../context/Context";
import { Post } from "../models/postModel";
import Spinner from "./Spinner";
import Sidebar from "./Sidebar";

type Props = {
  post: Post[];
};

export default function SinglePostComponent({ post }: Props) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const postFetched = post.find((p) => p._id === path);
  const PublicFolder = `${process.env.REACT_APP_SERVER_HOST_NAME}/images/`;
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
  if (window.confirm('Are you sure you want to delete this post?')) {
    try {
      await axios.delete(`/posts/${postFetched?._id}`, {
        data: { email: user?.user.email },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
    <div className="singlePostComponent m-5">
      <div className="singlePostWrapper ">
        <img
          src={PublicFolder + postFetched?.photo}
          alt=""
          className="singlePostImg w-screen h-auto lg:max-h-[900px] rounded-lg border-r-4 object-cover"
        />{" "}
      </div>
      <div className="w-full">
        {updateMode ? (
          <>
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
            <div className="flex flex-col justify-center text-center">
              <textarea
                className="writeText border-4 border-blue-50 focus:outline-none  text-lg italic p-5 w-[80%] h-[50vh] md:my-8"
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
          </>
        ) : (
          <div className="">
            <h1 className="singlePostCompTitle flex items-center justify-center m-2 text-4xl font-serif text-gray-500">
              {postFetched.title}
            </h1>
            {postFetched.email === user?.user.email && (
              <div className="singlePostCompEdit flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 singlePostCompIcon ml-4 cursor-pointer text-teal-500 w-6"
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
                  className="h-6 w-6 singlePostCompIcon ml-4 cursor-pointer text-red-500"
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
            <div className="singlePostCompInfo flex justify-center items-center flex-col mb-5 m-2 text-yellow-700 font-[Varela] italic">
              <span className="singlePostCompAuthor">
                Author: <b>{postFetched.email}</b>
              </span>
              <span className="singlePostCompDate mr-10">
                {new Date(postFetched.createdAt).toDateString()}
              </span>
            </div>
            <div className="flex flex-row">
              <div className="singlePostCompDesc text-sm first-letter:text-lg first-letter:capitalize mr-10 leading-6">
                 {postFetched.desc.split(",")} 
              </div>
              <Sidebar/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
