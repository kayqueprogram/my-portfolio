import React, { useEffect, useState } from 'react';

const DataFetcher = ({ Component, propsForComponent, fetchFunc }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFunc();
      setData(data);
    }

    fetchData();
  }, [fetchFunc]);

  return <Component data={data} {...propsForComponent} />;
}

export default DataFetcher;
