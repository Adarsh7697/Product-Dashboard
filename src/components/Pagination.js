import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination-container">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`page-button ${index + 1 === currentPage ? 'active' : ''}`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
