// 2. Create a toggle switch component between "On" and "Off" states.
// This was my attempt

import { useState } from "react";

const Problem_2 = () => {
  const [toggleSwitch, setToggleSwitch] = useState("on"); //initially it is set to on

  return (
    <>
      <h3>
        Problem: 2. Create a toggle switch component between "On" and "Off"
        states.
      </h3>
      <p>Current switch state: {toggleSwitch}</p>
      <button
        onClick={() => {
          setToggleSwitch("off");
        }}
      >
        Toggle off
      </button>
      <button
        onClick={() => {
          setToggleSwitch("on");
        }}
      >
        Toggle on
      </button>

      <h3>Proposed Solution:</h3>
      <ProposedSolution />
    </>
  );
};
export default Problem_2;

const ProposedSolution = () => {
  const [toggleSwitch, setToggleSwitch] = useState("false"); //by default it is off (false)

  return (
    <>
      <button
        onClick={() => {
          setToggleSwitch(!toggleSwitch);
        }}
      >
        {toggleSwitch ? <p>Off</p> : <p>On</p>}
      </button>
    </>
  );
};
