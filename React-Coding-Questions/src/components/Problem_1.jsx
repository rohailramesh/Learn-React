// 1. Create a simple counter component that increases or decreases the count when clicking buttons.
// This was my attempt
import { useState } from "react";

const Problem_1 = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const handleDecreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>
        Problem: 1. Create a simple counter component that increases or
        decreases the count when clicking buttons.
      </h3>
      <p>{count}</p>
      <button onClick={handleIncreaseCount}>Increase count</button>
      <button onClick={handleDecreaseCount}>Decrease count</button>
    </>
  );
};

export default Problem_1;

// Proposed solution:
// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// };

// export default Counter;
