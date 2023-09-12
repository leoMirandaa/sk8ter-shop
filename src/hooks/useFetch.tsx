import { useState, useEffect } from "react";
import axios from "axios";

const url = import.meta.env.VITE_REACT_APP_URL;

const useFetch = (endpoint: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios({
        url: `${url}/${endpoint}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response.data.results);
    } catch (error) {
      setError(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error };
};

export default useFetch;
