import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Post } from "../models/postModel";
import Page404 from "../pages/Page404/Page404";

type Props = {
  post: Post[]
};

export default function SinglePostComponent({post}: Props) {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const postFetched = post.find(p => p._id === path)
 

  if(!postFetched){
    return (<div className="singlePostComponent">
      <Page404/>
    </div>
    )
  }


  return (
    <div className="singlePostComponent">
      <div className="singlePostCompWrapper p-5 pr-0">
        <img
          src={postFetched.photo} alt=""
          className="singlePostImg w-4/5 h-1/2 md:h-full md:ml-16 rounded-lg object-cover"
        />
        <h1 className="singlePostCompTitle text-center m-2 text-lg font-[lora]">
          {postFetched.title}
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
            Author: <b>{postFetched.name}</b>
          </span>
          <span className="singlePostCompDate mr-10">{new Date(postFetched.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostCompDesc text-sm  first-letter:text-lg first-letter:capitalize mr-10">
          {postFetched.desc}
        </p>
      </div>
    </div>
  );
}
 

