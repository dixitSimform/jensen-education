import { useState, useMemo } from 'react';
import { Record } from '../types/person';  // Import Record type

const usePagination = (filteredData: Record[], usersToShow: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(filteredData.length / usersToShow);

  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * usersToShow;
    const endIndex = startIndex + usersToShow;
    return filteredData.slice(startIndex, endIndex);
  }, [currentPage, filteredData, usersToShow]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= pageCount) {
      setCurrentPage(page);
    }
  };

  return { currentPage, pageCount, currentPageData, handlePageChange };
};

export default usePagination;
