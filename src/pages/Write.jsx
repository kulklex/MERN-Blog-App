import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate()
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, desc, email: user?.user.email };

    if (file) {
      const data = new FormData();
      const filename =  Date.now() + file?.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
     const res = await axios.post("/posts", newPost)
      navigate(`/posts/${res.data.post._id}`)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="write pt-14">
        {file && <img src={URL.createObjectURL(file)}
          alt=""
          className="writeImg flex items-center justify-center mx-10 w-[90%] h-[80%] md:h-[350px] rounded-lg object-cover"
        />}
        
      <form className="writeForm relative" onSubmit={handleSubmit}>
        <div className="writeFormGroup ml-40  flex  items-center  md:my-8">
          <label htmlFor="fileInput">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-3 text-gray-600 cursor-pointer flex items-center justify-center rounded-lg border-solid border border-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </label>
          <input type="file" id="fileInput" className="fileInput hidden" 
          onChange={(e) => {
            const image = e.target.files[0]
            if (!image.name.match(/\.(jpg|jpeg|png)$/)){
              alert("select valid image, accepts only jpg, jpeg and png")
              return false
            }
            setFile(e.target.files[0])}
          }/>
          <input
            type="text"
            id="textInput"
            className="writeInput border-none focus:outline-none text-xl font-serif p-5 w-[80%] md:w-[50%]"
            autoFocus={true}
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writFormGroup ml-40  flex items-center">
          <textarea
            placeholder="Create Story..."
            id=""
            className="writeText border-none focus:outline-none  text-lg italic p-5 w-[80%] h-[100vh] md:my-8"
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="writeSubmit top-5 right-[50px] md:right-40  absolute bg-blue-500 p-1 text-white border rounded-md w-1/6 md:w-1/12"
        >
          Publish
        </button>
      </form>
    </div>
  );
}
