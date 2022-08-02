import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import { Post } from "../models/postModel";

type Props = {
  post: Post
};

export default function BlogPost({post}: Props) {
  return (
    <div className="post mx-20 my-3 flex flex-col justify-between">
      <img
        src={post.photo} alt=""
        className="postImage w-96 object-cover h-64 rounded"
      />
      <div className="postInfo w-96 flex items-center flex-col">
        <div className="postCats">
          {post.categories.map(cat => (
            <span className="postCat font-serif font-semibold text-amber-400 text-xs  mt-4 mx-5 cursor-pointer">{cat}</span>
          ))}
        </div>
        <Link to={`/posts/${post._id}`} className="link">
          <span className="postTitle font-sans font-bold text-lg">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate italic font-serif text-xs text-amber-400 mt-2">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc w-96 font-sans leading-6 text-black overflow-hidden text-ellipsis">
        {post.desc}
       </p>
    </div>
  );
}
