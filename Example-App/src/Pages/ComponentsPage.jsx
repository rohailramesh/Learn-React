import React from "react";
import JsxExample from "../Components/JsxExample";
import PropsVsState from "../Components/PropsVsState";
import ConditionalRendering from "../Components/ConditionalRendering";
import CompositionReact from "../Components/CompositionReact";
const ComponentsPage = () => {
  const exampleProps =
    "This is an example of props passed to the component. Check the ComponentsPage.jsx code to see how prop is passed into a component.";
  return (
    <div>
      <h1>Topic - Functional Components in React</h1>
      <JsxExample />
      <PropsVsState propName={exampleProps} />
      <ConditionalRendering />
      <CompositionReact>
        <p>
          Composition of React Example by passing this p tag as children inside
          another component. Make sure to use props.children to access the
          children in the parent component.
        </p>
      </CompositionReact>
    </div>
  );
};

export default ComponentsPage;
