import React from "react";
import "bootstrap/dist/css/bootstrap.css";

let Home = () => {
  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center mt-5 ">
      <h1>Welcome</h1>
      <p>This exercise was done with the goal to show basic command of:</p>
      <ul>
        <li>Router</li>
        <li>Bootstrap</li>
        <li>fetch API</li>
        <li>App Context with Flux</li>
        <li>Hooks: useState - useEffect</li>
      </ul>
      <h1 className="mt-5">Instructions:</h1>
      <p>
        Click on characters or episodes, and get the cards displayed with the
        data of the API from the famous Rick&Morty TV-Show
      </p>
      <p>You can try on mobile!</p>
    </div>
  );
};

export default Home;
