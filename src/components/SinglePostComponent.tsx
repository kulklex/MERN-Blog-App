import React from "react";
import "../App.css";

type Props = {};

export default function SinglePostComponent({}: Props) {
  return (
    <div className="singlePostComponent">
      <div className="singlePostCompWrapper p-5 pr-0">
        <img
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLMonX59blD7HuaOM8cz2yXdQ6TxfGjTfSSw8VX80jhw2O1NTQizDb5if6Trr0yG5L_hqrp3XmnerqSE7bs6G48RqHo9uWlpmi2A-oHxTC&usqp=CAc"
          alt=""
          className="singlePostImg w-[90%] h-72 rounded object-cover"
        />
        <h1 className="singlePostCompTitle text-center m-2 text-lg font-[lora]">
          Lorem ipsum dolor sit amet
          <div className="singlePostCompEdit float-right flex">
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
        <div className="singlePostCompInfo flex mb-5 justify-between text-sm text-yellow-700 font-[Varela] italic">
          <span className="singlePostCompAuthor">
            Author: <b>Hassan</b>
          </span>
          <span className="singlePostCompDate">1 hour ago</span>
        </div>
        <p className="singlePostCompDesc text-sm  first-letter:text-lg first-letter:capitalize ">
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
