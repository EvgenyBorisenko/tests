import React from 'react';

const Post = ({ hits }) => (
  <ul >
    {hits.map(post => (
      <li key={post.id} id={post.id}>
        <img src={post.largeImageURL} alt="dsfsdf" />

      </li>
    ))}
  </ul>
);

export default Post;
