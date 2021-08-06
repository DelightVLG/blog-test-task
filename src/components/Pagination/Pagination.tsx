import React from 'react';

interface PaginationInterface {
  postPerPage: number,
  totalPosts: number,
  paginate?: any
}

export const Pagination: React.FC<PaginationInterface> = (
  { postPerPage, totalPosts, paginate}) => {

  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li className="page-item" key={number}>
              <a
                className="page-link" href="#"
                onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
