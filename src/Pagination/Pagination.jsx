import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Images } from './Images';
import { Page } from './Page';

export const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://movie-fake-server.herokuapp.com/products');
          setPosts(res.data);
          setLoading(false);
        };
    
        fetchPosts();
      }, []);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    return (
      <div className=''>
        <h1 className=''>My Blog</h1>
        <Images posts={currentPosts} loading={loading} />
        <Page
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
  )
}
