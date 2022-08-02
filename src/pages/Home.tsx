import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../sidebar/Sidebar";
import Posts from "./Posts";
import axios from "axios"

export default function Home() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const fetchedPosts =  () => {
      axios.get("/posts")
      .then((res) => {
        const data = res.data 
        setPosts(data.posts)
      })
      .catch((err) => {
        console.error(err)
      })
    }
    fetchedPosts()
  })

  return (
    <>
      <Header />
      <div className="home flex flex-row">
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
  );
}
