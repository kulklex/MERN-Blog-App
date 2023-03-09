import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import "../App.css"
import { Context } from '../context/Context'
import axios from "axios"


export default function Settings() {
  const {user:userFetched, dispatch} = useContext(Context)
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);



  const PublicFolder = `${process.env.REACT_APP_SERVER_HOST_NAME}/images/`

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type: "UPDATE_START"})
    const user = {
      userId: userFetched?.user._id,  username, email,
    }
    
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      user.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error(err)
      }
    }
    try {
      const res = await axios.put("/users/" + userFetched?.user._id, user)
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      console.log(res.data)
      window.location.reload()  
      } catch (err) {
      setError(true)
      console.log(err)
      dispatch({ type: "UPDATE_FAILURE" });
    }
  }
  return (
    <div className='settings flex'>
      <div className="settingsWrapper p-5">
        <div className="settingsTitle flex items-center justify-center">
          { error && <span className="settingsDeleteTitle text-red-600 cursor-pointer">Fill in all fields </span>  }
        </div>
       
        <form className="settingsForm flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="profilePic" >Profile Picture</label>
          <div className="mb-2 settingsProfilePicDiv flex items-center my-2 mx-0">
            { userFetched?.user &&  
              <img src={ file ? URL.createObjectURL(file) : PublicFolder + userFetched?.user?.profilePic } alt=""
              className="settingsProfilePic w-20 h-20 object-cover rounded-2xl" /> 
            }

            <label htmlFor="fileInput">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer rounded-md text-gray-600 flex items-center justify-center ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </label>
            <input type="file"  id="fileInput" className='hidden' onChange={(e) => setFile(e.target.files[0])}/>
          </div>
          <label htmlFor="">Username</label>
          <input className='border-b my-3 mx-0' required type="text" placeholder={userFetched?.user?.username} onChange={(e) => setUsername(e.target.value)}/>
          <label htmlFor="">Email</label>
          <input className=' border-b my-3 mx-0' required type="email"  placeholder={userFetched.user?.email} onChange={(e) => setEmail(e.target.value)}/>
          <button type="submit" className="settingsSubmit   self-center w-20 md:w-40 items-center rounded-lg text-white p-2 mt-5 cursor-pointer bg-blue-600">
            Update
          </button>
          {success && <span className='text-center text-green-500 mt-5'>Profile has been updated</span>}
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}