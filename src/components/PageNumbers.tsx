import React from 'react';
import { Pagination } from 'react-bootstrap';

interface PageNumbersProps {
  currentPage: number;
  pageCount: number;
  handlePageChange: (page: number) => void;
}

export const PageNumbers: React.FC<PageNumbersProps> = ({
  currentPage,
  pageCount,
  handlePageChange,
}) => {
  // Logic to create the page numbers
  const pageNumbers = [];
  const maxPagesToShow = 5; // You can adjust the number of pages to display
  const delta = Math.floor(maxPagesToShow / 2);

  // Generate page numbers considering the current page and total page count
  for (let i = Math.max(1, currentPage - delta); i <= Math.min(pageCount, currentPage + delta); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="mb-0">
      {/* First Button */}
      <Pagination.First
        onClick={() => handlePageChange(1)}
        disabled={currentPage <= 1}
      />

      {/* Previous Button */}
      <Pagination.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      />

      {/* Display page numbers dynamically */}
      {pageNumbers.map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}

      {/* Ellipsis if there are more pages */}
      {pageCount > maxPagesToShow && currentPage + delta < pageCount && (
        <Pagination.Ellipsis />
      )}

      {/* Next Button */}
      <Pagination.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= pageCount}
      />

      {/* Last Button */}
      <Pagination.Last
        onClick={() => handlePageChange(pageCount)}
        disabled={currentPage >= pageCount}
      />
    </Pagination>
  );
};
