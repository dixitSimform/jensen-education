import React, { useState, useEffect } from "react";
import { Record } from "../types/person"; // Import Record type

const useFetchData = (
  url: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [data, setData] = useState<Record[]>([]); // Use Record[] type
  const [totalItems, setTotalItems] = useState<number>(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result: Record[] = await response.json(); // Ensure the result is of type Record[]
      setData(result);
      setTotalItems(result.length); // Set total number of items
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, totalItems };
};

export default useFetchData;
