import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");

  const fetchData = async (url: string) => {
    if (!url) {
      setError("URL not found!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: T = await response.json();

      setData(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
