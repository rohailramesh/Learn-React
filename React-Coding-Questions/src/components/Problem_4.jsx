/* 
4. Fetch Data from an API

Problem:
Create a component fetching data from an API and displaying it in a list.

*/
import { useState, useEffect } from "react";
import axios from "axios";
const Problem_4 = () => {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://universities.hipolabs.com/search?country=United+Kingdom"
        );
        setApiData(res.data);
        console.log(apiData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h3>
        Problem: 4. Create a component fetching data from an API and displaying
        it in a list.
      </h3>
      <div>
        (Only displaying first 10 for demo purposes)
        {apiData &&
          apiData
            .slice(0, 10)
            .map((item) => <div id={item.id}>{item.name}</div>)}
      </div>
      <Problem_4_Without_Axios />
    </>
  );
};

export default Problem_4;

const Problem_4_Without_Axios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=United+Kingdom")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  });
  if (loading) {
    return <p>Fetching Data</p>;
  }

  return (
    <>
      <p>
        The below solution is an alternate which uses fetch instead of axios
      </p>
      {data &&
        data.slice(0, 10).map((item) => <li id={item.name}>{item.name}</li>)}
    </>
  );
};
