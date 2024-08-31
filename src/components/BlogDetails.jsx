import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold capitalize underline">{post.title}</span>
      </NavLink>
      <p className="">
        <span className="font-bold mr-1">By: </span>
        <span>{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p>
        <span className="font-bold mr-1">Posted on:</span>
        {post.date}
      </p>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="mr-1 text-blue-900 font-semibold">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
