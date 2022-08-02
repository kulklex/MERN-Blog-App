import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { Post } from "../models/postModel";

type Props = {};

export default function SinglePostComponent({}: Props) {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [postFetched, setPostFetched] = useState([])

  useEffect(() => {
    const getPost = () => {
      axios.get(`/posts/${path}`)
      .then((res) => {
        setPostFetched(res.data.post)
        console.log(res.data.post);
        
      })
      .catch((err) => {
        console.log(err)
      })
    }
    getPost()
  }, [path])

  return (
    <div className="singlePostComponent">
      <div className="singlePostCompWrapper p-5 pr-0">
        <img
          src="https://images.unsplash.com/photo-1512223886638-d2914abf5df3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cXVvdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
          alt=""
          className="singlePostImg w-4/5 h-1/2 md:h-full md:ml-16 rounded-lg object-cover"
        />
        {postFetched?.title}
        <h1 className="singlePostCompTitle text-center m-2 text-lg font-[lora]">
          <div className="singlePostCompEdit flex justify-end mr-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 singlePostCompIcon ml-2 cursor-pointer text-teal-500 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
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
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
             </div>
        </h1>
        <div className="singlePostCompInfo flex flex-col mb-5 justify-start text-sm text-yellow-700 font-[Varela] italic">
          <span className="singlePostCompAuthor">
            Author: <b>Hassan</b>
          </span>
          <span className="singlePostCompDate mr-10">1 hour ago</span>
        </div>
        <p className="singlePostCompDesc text-sm  first-letter:text-lg first-letter:capitalize mr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
    </div>
  );
}
