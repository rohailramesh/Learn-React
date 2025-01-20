import { useMemo, useState } from "react";

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});
/* initialItems is an array of 29,999,999 elements filled with 0 as initial values.
Then it is mapped into an array of objects.
Each object has two properties:
id: A unique integer from 0 to 29,999,998.
isSelected: true for the last object (id === 29_999_998), and false for all others.
*/
const UseMemoEg = () => {
  const [count, setCount] = useState(0);
  const items = useState(initialItems);

  const usingMemoEg = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  ); // using useMemo to cache the value of usingMemoEg where items is the dependency array

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>Count: {count}</p>
      <p>Selected item: {usingMemoEg ? usingMemoEg.id : "None"}</p>
    </div>
  );
};
export default UseMemoEg;
