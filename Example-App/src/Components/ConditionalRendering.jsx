import React from "react";
import { useState } from "react";
const ConditionalRendering = () => {
  //Displaying a message depending if user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false); //user logged out initially
  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev); //flips the value of previous state of isLoggedIn
  };
  return (
    <div>
      {isLoggedIn ? (
        <div>Displaying message based on condition that user is logged in</div>
      ) : (
        <div>Displaying message based on condition that user is logged out</div>
      )}
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

export default ConditionalRendering;
