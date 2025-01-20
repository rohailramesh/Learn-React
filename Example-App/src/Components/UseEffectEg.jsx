import { useEffect, useState } from "react";

const UseEffectEg = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    //function to run when component mounts
    // set name to "Rohail" after 3 seconds
    setTimeout(() => {
      setName("Rohail");
    }, 3000);
    return () => {
      //this is like a clean up function when component unmounts
    };
  }, []); //dependency array on which useEffect will run. it can be empty too)

  return <div>{name}</div>;
};

export default UseEffectEg;
