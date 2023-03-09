import React, {useEffect, useState} from 'react'
import axios from "axios"
import SinglePostComponent from '../components/SinglePostComponent'


export default function SinglePost() {
  const [post, setPosts] = useState([])
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
  return (<>
    <SinglePostComponent post={post}/>
  </>)
}