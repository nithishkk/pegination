import React, { useState } from 'react';

const Pagination = () => {
  const itemsPerPage = 6;
  const totalItems = 90;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = Array.from(Array(totalItems).keys()).slice(startIndex, endIndex);

  return (
    <div>
      {itemsToShow.map((item, index) => (
        <p key={index}>Item {item + 1}</p>
      ))}

      <div>
        {Array.from(Array(Math.ceil(totalItems / itemsPerPage)).keys()).map((page) => (
          <button key={page} onClick={() => handlePageChange(page + 1)}>
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
