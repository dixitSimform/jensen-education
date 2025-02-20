import { useState, useMemo } from 'react';
import { Record } from '../types/person';  // Import Record type

const usePagination = (filteredData: Record[], usersToShow: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(filteredData.length / usersToShow);
  
  // Memoize current page data for performance optimization
  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * usersToShow;
    const endIndex = startIndex + usersToShow;
    const dataSlice = filteredData.slice(startIndex, endIndex);

    return dataSlice;
  }, [currentPage, filteredData, usersToShow]); // dependencies include all the values that trigger recomputation
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= pageCount) {
      setCurrentPage(page);
    }
  };

  return { currentPage, pageCount, currentPageData, handlePageChange };
};

export default usePagination;
