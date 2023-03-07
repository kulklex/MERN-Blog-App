import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Posts from "./Posts";
import { useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()
  

  useEffect(() => {
    const fetchedPosts =  () => {
      axios.get(`/posts${search}`)
      .then((res) => {
        const data = res.data 
        setPosts(data.posts)
      })
      .catch((err) => {
        console.error(err)
      })
    }
    fetchedPosts()
  }, [search])

if(!posts) return <Spinner/>

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
