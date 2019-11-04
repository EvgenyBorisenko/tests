import React from 'react';
import Post from './Post';

const PicturePost = ({ hits, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default PicturePost;