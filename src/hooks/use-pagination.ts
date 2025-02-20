import { useState, useEffect, useMemo } from 'react';

// Define types for the data structure
export type Record = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  department: string;
  role: string;
  unit: string;
  class: string;
  image: string;
};

export type Filters = {
  role: string[];
  unit: string[];
  class: string[];
  department: string[];
};

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    role: [],
    unit: [],
    class: [],
    department: [],
  });
  const [data, setData] = useState<Record[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
// State to track the selected number of users
const [usersToShow, setUsersToShow] = useState<number>(5);
 // Debounced search term to avoid firing the search on every keystroke
 const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

// Handle the dropdown change event
const handleSelect = (eventKey: string | null) => {
  if (eventKey) {
    const selectedValue = parseInt(eventKey, 10);
    setUsersToShow(selectedValue);
    setCurrentPage(1);
  }
};

 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/dummy.json'); // Load JSON from public folder
      const result: Record[] = await response.json();
      setData(result);
      setTotalItems(result.length); // Set the total count of records
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Apply filters and search to data
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Check if item matches search term (across all fields)
      const matchesSearch = Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );

      // Check if item matches the filters (multiple values in filters)
      const matchesFilters =
        (filters.role.length === 0 || filters.role.includes(item.role)) &&
        (filters.unit.length === 0 || filters.unit.includes(item.unit)) &&
        (filters.class.length === 0 || filters.class.includes(item.class)) &&
        (filters.department.length === 0 || filters.department.includes(item.department));

      return matchesSearch && matchesFilters;
    });
  }, [data, filters, debouncedSearchTerm]);

  // Calculate the current page data
  const pageCount = Math.ceil(filteredData.length / usersToShow);
  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * usersToShow;
    const endIndex = startIndex + usersToShow;
    return filteredData.slice(startIndex, endIndex);
  }, [currentPage, filteredData, usersToShow]);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= pageCount) {
      setCurrentPage(page);
    }
  };

  // Set the filters and reset page to 1
  const setFilter = (filterName: string, selectedValues: string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: selectedValues,
    }));
    setCurrentPage(1); // Reset to page 1 when filters change
  };

  // Set search term and reset page to 1
  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    setCurrentPage(1); // Reset to page 1 when search term changes
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
    searchTerm,
    handleSearchChange,
    usersToShow,
    handleSelect
  };
};

export default usePagination;
