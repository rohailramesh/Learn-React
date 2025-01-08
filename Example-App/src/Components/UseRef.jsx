import { useRef } from "react";

const UseRef = () => {
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }
  return (
    <div>
      <button onClick={handleClick}>
        You have clicked the button {ref.current} times
      </button>
      <p>
        Value does not change on the UI but is updated in the console as useRef
        does not re-render the component when the value changes. To do that, use
        the useState hook. UseRef is ideal for accessing DOM elements directly
      </p>
    </div>
  );
};

export default UseRef;
