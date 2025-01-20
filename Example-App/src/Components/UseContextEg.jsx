import { createContext, useContext } from "react";

//This is the parent class for useContext example where I will show how to make use of useContext to manage state globally and be accessed by child components rather than prop drilling
// first you have to create the context for the variable you want to use in a context file ideally and export it but for now everything is in same file for example purposes
const ExampleContext = createContext();
const ParentComponent = () => {
  return (
    //Going to wrap the child components inside the conhtext create provider to make the var accessible
    <ExampleContext.Provider value="Parent page">
      <h1>Parent page title</h1>
      <ChildComponent />
    </ExampleContext.Provider>
  );
};

export default ParentComponent;

//this is the child component which is generally usually in seperate component itself
const ChildComponent = () => {
  const valueFromContext = useContext(ExampleContext); //The arg inside useContext must be what was named earlier to create the context
  return (
    <h1>This is a child component using the state from {valueFromContext}</h1>
  );
};
