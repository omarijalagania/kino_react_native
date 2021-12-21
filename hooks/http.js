import { useState, useEffect } from "react";

import axios from "axios";

export const useHttp = (url, dependency) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios(url)
      .then((data) => {
        setFetchedData(data.data.data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, dependency);
  return [isLoading, fetchedData];
};
