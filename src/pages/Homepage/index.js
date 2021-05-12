import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="text-xs my-1" onClick={() => console.log(data)}>
      {data && data.map((el) => <p>{el.title}</p>)}
    </div>
  );
};

export default HomePage;
