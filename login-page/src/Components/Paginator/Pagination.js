import React from 'react';
import s from './Paginator.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={s.list} >
        {pageNumbers.map(number => (
          <li className={s.items}
            key={number} >
            <a className={s.button}
              onClick={() => paginate(number)} href='!#' >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;