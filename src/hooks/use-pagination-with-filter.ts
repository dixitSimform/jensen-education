import { useEffect, useState } from "react";
import useFetchData from "./use-fetch";
import useFilters from "./use-filter";
import usePagination from "./use-pagination";

const usePaginationWithFilters = () => {
  const [usersToShow, setUsersToShow] = useState(5);
  const [loading, setLoading] = useState<boolean>(false);

  const { data, totalItems } = useFetchData("/modified_dummy.json",setLoading); // Fetch data

  const { filteredData, filters, setFilter, handleSearchChange, searchTerm } =
    useFilters(data, setLoading); // Apply filters and search
  const { currentPage, pageCount, currentPageData, handlePageChange } =
    usePagination(filteredData, usersToShow); // Handle pagination

  useEffect(() => {
    handlePageChange(1); // Reset to page 1 when filters change
  },[filters, searchTerm, usersToShow]);
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
