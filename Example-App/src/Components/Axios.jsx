import axios from "axios";
import { useState, useEffect } from "react";

const AxiosExample = () => {
  const [toDo, setToDo] = useState();
  const getToDo = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(res.data);
      setToDo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToDo();
  }, []);

  return <>{toDo ? <div>{toDo.title}</div> : <div>Loading</div>}</>;
};

export default AxiosExample;
