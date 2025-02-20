import React, { useState, useMemo, useEffect } from 'react';
import { Filters, Record } from '../types/person';  // Import Record type

const useFilters = (data: Record[],setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [filters, setFilters] = useState<Filters>({
    role: [],
    unit: [],
    class: [],
    department: [],
  });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  // Apply filters and search to data
  const filteredData = useMemo(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    return data.filter((item) => {
      const matchesSearch = Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      const matchesFilters =
        (filters.role.length === 0 || filters.role.includes(item.role)) &&
        (filters.unit.length === 0 || filters.unit.includes(item.unit)) &&
        (filters.class.length === 0 || filters.class.includes(item.class)) &&
        (filters.department.length === 0 || filters.department.includes(item.department));

      return matchesSearch && matchesFilters;
    });
  }, [data, filters, debouncedSearchTerm]);

  const setFilter = (filterName: string, selectedValues: string[]) => {


    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: selectedValues,
    }));
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
  };

  return { filteredData, filters, setFilter, handleSearchChange, searchTerm };
};

export default useFilters;
