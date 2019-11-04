import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PicturePost from '../PicturePost/PicturePost';




const Pictures = () => {
  const [total, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(
        `https://pixabay.com/api/?image&key=12869213-d0e5717d841c234d773fc655d`,
      )
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);
  console.log(total);
  return (
    <div>
      <h2>Hello </h2>
      <PicturePost />
    </div>
  );

}

export default Pictures;