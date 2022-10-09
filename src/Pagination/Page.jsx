import React from "react";

export const Page = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="bog_page">
      {pageNumbers.map((number) => (
        <div className="page" key={number}>
          <p onClick={() => paginate(number)}>{number}</p>
        </div>
      ))}
    </div>
  );
};
