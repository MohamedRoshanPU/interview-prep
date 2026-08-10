import { useEffect, useState } from "react";

const useDebounce = (query: string, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(query);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [query, delay]);

  return { debouncedValue };
};

export default useDebounce;
