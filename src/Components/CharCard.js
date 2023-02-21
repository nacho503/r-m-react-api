import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";

//Context
import { useContext } from "react";
import { Context } from "../Store/appContext";

let Card = (props) => {
  const { actions } = useContext(Context);
  const favoriteClickHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();

    actions.addFavorite(`Character: ${props.name}`);
  };

  const handleGoToCharacter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `/characters/${props.id}`;
  };

  return (
    <>
      <div
        className="card"
        style={{ width: "18rem" }}
        onClick={(e) => handleGoToCharacter(e)}
      >
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-char-text">
            <h5 className="card-title">
              {props.id} - {props.name}
            </h5>
            <p className="card-text">
              <ul className="card-char-attributes">
                <li className="card-char-attribute">
                  <FontAwesomeIcon icon={faFingerprint} /> {props.species}
                </li>
                <li className="card-char-attribute">
                  <FontAwesomeIcon icon={faVenusMars} /> {props.gender}
                </li>
                <li className="card-char-attribute">
                  <FontAwesomeIcon icon={faEarth} /> {props.origin}
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
      </div>
    </>
  );
};

export default Card;
