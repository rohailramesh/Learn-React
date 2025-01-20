import React from "react";
import UseEffectEg from "../Components/UseEffectEg";
import UseRef from "../Components/UseRef";
import ParentComponent from "../Components/UseContextEg";
import UseReducer from "../Components/UseReducer";
const HooksInReactPage = () => {
  return (
    <div>
      <h1>
        Below is an example of useEffect where the string "Rohail" is displayed
        after 3 second delay when the initial component mounts
      </h1>
      <UseEffectEg />
      <h1>Example of how useRef hook works</h1>
      <UseRef />
      <h1>Example below is for showing how useContext works</h1>
      <ParentComponent />
      <UseReducer />
    </div>
  );
};

export default HooksInReactPage;
