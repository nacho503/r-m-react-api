import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CharCard.css";

import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let CharSingleView = (props) => {
  let episodes = props.episodes;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.image}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {props.id} - {props.name}
            </h5>

            <ul className="attributes-list">
              <li>Species: {props.specie}</li>
              <li>Status: {props.status}</li>
              {props.type === "" ? "" : <li>Type: {props.type}</li>}
              <li>Gender: {props.gender}</li>
              <ul>
                {/* Episodes:
                  {episodes.map((episode) => (
                    <li>{episode.slice(-2)}</li>
                  ))} */}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharSingleView;
