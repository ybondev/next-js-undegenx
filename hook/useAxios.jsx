"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

  const FETCH_DATA = async (param) => {
    try {
      setLoading(true);
      const result = await axios(param);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      FETCH_DATA(param);
    }, 10000);

    return () => clearInterval(interval);
  });
  return {
    response,
    loading,
    error,
  };
};

export default useAxios;
