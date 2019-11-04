import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mapper from './mapper';

const Pictures = () => {
  const [hits, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(10);
  console.log(hits);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://pixabay.com/api/?image&key=12869213-d0e5717d841c234d773fc655d`,
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {mapper(hits)}
      <h2>Hello </h2>
    </div>
  );
};

export default Pictures;
