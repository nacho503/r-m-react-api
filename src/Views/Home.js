import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import { useContext } from "react";
import { Context } from "../Store/appContext";

let Home = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.renderPaginationAct();
  }, []);

  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center mt-5 ">
      <h1>Welcome</h1>
      <p>
        <strong>
          This exercise was done with the goal to show basic command of React
          with:
        </strong>
      </p>

      <ul>
        <li>
          {" "}
          <strong>Router</strong>
        </li>
        <li>
          <strong>Bootstrap</strong>
        </li>
        <li>
          <strong>fetch API</strong>
        </li>
        <li>
          <strong>App Context with Flux</strong>
        </li>
        <li>
          <strong>Hooks: useState - useEffect</strong>
        </li>
      </ul>
      <h1 className="mt-5">Instructions:</h1>
      <p>
        <strong>
          Click on characters or episodes, and get the cards displayed with the
          data from the API from the famous Rick&Morty TV-Show
        </strong>
      </p>
      <strong>
        <p>You can try on mobile!</p>
      </strong>
    </div>
  );
};

export default Home;
