import React from "react";
import "./image.css";
export const Images = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="img_div">
      {posts.map((post) => (
        <>
          <div>
            <img src={post.image} alt="" />
            <div> {post.title}</div>
          </div>
        </>
      ))}
    </div>
  );
};
