import React from 'react';
import s from './Posts.module.css';

const Posts = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={s.wrapper}>
      {items.map(({ id, largeImageURL }) => (
        <li className={s.imageBox} key={id}>
          <img className={s.image} src={largeImageURL} alt="someImage" />
        </li>
      ))}
    </div>
  );
};

export default Posts;