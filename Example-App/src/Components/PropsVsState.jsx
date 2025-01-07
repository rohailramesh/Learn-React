import React from "react";

const PropsVsState = (props) => {
  const exampleState = "This is an example of state inside a component";
  return (
    <>
      <div>{exampleState}</div>
      <div>{props.propName}</div>
    </>
  );
};

export default PropsVsState;
