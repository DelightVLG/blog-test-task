import React from 'react';

export const SearchForm: React.FC = () => {
  return (
    <div className="single-blog-page">
      <form action="#">
        <div className="search-option">
          <input type="text" placeholder="Search..." />
          <button className="button" type="submit">
            <i className="bi bi-search" />
          </button>
        </div>
      </form>
    </div>
  )
}
