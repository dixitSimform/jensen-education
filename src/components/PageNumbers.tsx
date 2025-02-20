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
  const pageNumbers = [];
  const maxPagesToShow = 3; // Adjust the number of pages to display
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

      {/* Display ellipsis before the page numbers if previous pages exist */}
      {currentPage - delta > 1 && pageNumbers[0] > 1 && (
        <>
         
          <Pagination.Item onClick={() => handlePageChange(1)}>1</Pagination.Item>
          <Pagination.Ellipsis />
        </>
      )}

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

      {/* Display ellipsis after the page numbers if more pages exist */}
      {currentPage + delta < pageCount && pageNumbers[pageNumbers.length - 1] < pageCount && (
        <>
          <Pagination.Ellipsis />
          <Pagination.Item onClick={() => handlePageChange(pageCount)}>{pageCount}</Pagination.Item>
        </>
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
