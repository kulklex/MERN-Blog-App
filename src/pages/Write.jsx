import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import {MdCreate} from 'react-icons/md'



export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState('');

  const navigate = useNavigate();
  const { user } = useContext(Context);

  
  const [fetchedCategories, setFetchedCategories] = useState([]);
  useEffect(() => {
    axios.get('/categories').then((res) => setFetchedCategories(res.data))
    
  })  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, desc, category, email: user?.user.email };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file?.name;
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
      const res = await axios.post("/posts", newPost);
      navigate(`/posts/${res.data.post._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="write pt-14">
    
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt=""
          className="writeImg flex items-center justify-center mx-10 w-[90%] h-[80%] md:h-[350px] rounded-lg object-cover"
        />
      )}
      <form className="writeForm  relative mt-3" onSubmit={handleSubmit}>
        <div className="flex  m-6 ml-[39%] text-blue-300">
          <Link to={`/new-category`}>
            Create a new category 
          </Link>{"  "}
          <MdCreate className="mt-1 ml-1"/>
        </div>
        <select onChange={(e) => setCategory(e.target.value)} className="flex items-center justify-center ml-[40%] bg-gray-500 h-10 rounded-md">
           {fetchedCategories.map((category, index) => (
              <option key={index} value={category?.name} className="flex items-center justify-center text-gray-100">{category?.name}</option>
            ))}
        </select>
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
          <input
            type="file"
            id="fileInput"
            className="fileInput hidden"
            onChange={(e) => {
              const image = e.target.files[0];
              if (!image.name.match(/\.(jpg|jpeg|png)$/)) {
                alert("select valid image, accepts only jpg, jpeg and png");
                return false;
              }
              setFile(e.target.files[0]);
            }}
          />
          <input
            type="text"
            id="textInput"
            className="writeInput border-b-4 border-blue-50 focus:outline-none text-xl font-serif p-5 w-[80%] md:w-[50%]"
            autoFocus={true}
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
 
        </div>
        <div className="writFormGroup ml-40  flex items-center">
          <textarea
            required
            placeholder="Create Story..."
            id=""
            className="writeText border-4 border-blue-50 focus:outline-none  text-lg italic p-5 w-[80%] h-[50vh] md:my-8"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="flex items-center justify-center bg-blue-500 p-2 text-white border rounded-md w-1/6 md:w-1/12"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
