import React from 'react'
import "../App.css"
import BlogPost from './BlogPost'


export default function Posts() {
  return (
    <div className='posts flex flex-wrap m-5'>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
    </div>
  )
}