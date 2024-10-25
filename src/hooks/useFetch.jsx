import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
        });
        const data = await res.json();
        if (res.ok) {
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
