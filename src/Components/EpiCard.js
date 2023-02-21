import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { Context } from "../Store/appContext";

let EpiCard = (props) => {
  const { actions } = useContext(Context);
  const favoriteClickHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();

    actions.addFavorite(`Episode: ${props.name}`);
  };

  const handleGoToEpisode = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `/episode/${props.id}`;
  };

  return (
    <>
      <div
        className="card"
        style={{ width: "18rem" }}
        onClick={(e) => handleGoToEpisode(e)}
      >
        <div className="card-body">
          <h5 className="card-title">
            {props.id} - {props.name}
          </h5>

          <p className="card-text">
            <ul>
              <li>
                <FontAwesomeIcon icon={faClapperboard} /> {props.episode}
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendar} /> {props.air_date}
              </li>
            </ul>
          </p>
          <div className="btn-container">
            <a
              href="#"
              className="btn btn-primary"
              onClick={favoriteClickHandler}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpiCard;
