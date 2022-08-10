import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../sidebar/Sidebar";
import Posts from "./Posts";
import axios from "axios"
import { useLocation } from "react-router-dom";
import Page404 from "./Page404/Page404";

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

if(!posts || posts.length === 0) return <Page404/>

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
