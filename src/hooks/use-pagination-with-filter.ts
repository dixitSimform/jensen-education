import { useState } from "react";
import useFetchData from "./use-fetch";
import useFilters from "./use-filter";
import usePagination from "./use-pagination";

const usePaginationWithFilters = () => {
  const [usersToShow, setUsersToShow] = useState(5);
  const { data, loading, totalItems } = useFetchData("/dummy.json"); // Fetch data
  const { filteredData, filters, setFilter, handleSearchChange, searchTerm } =
    useFilters(data); // Apply filters and search
  const { currentPage, pageCount, currentPageData, handlePageChange } =
    usePagination(filteredData, usersToShow); // Handle pagination

  const handleSelect = (eventKey: string | null) => {
    if (eventKey) {
      const selectedValue = parseInt(eventKey, 10);
      setUsersToShow(selectedValue);
      handlePageChange(1); // Reset to page 1 when usersToShow changes
    }
  };

  return {
    currentPage,
    pageCount,
    currentPageData,
    loading,
    handlePageChange,
    setFilter,
    filters,
    totalItems,
    handleSearchChange,
    usersToShow,
    handleSelect,
    searchTerm,
  };
};

export default usePaginationWithFilters;
