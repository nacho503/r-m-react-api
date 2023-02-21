import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CharCard.css";
import rickandmortcouch from "../img/rick&mortyimg.jpg";

import "bootstrap/dist/css/bootstrap.css";

//Context
// import { useContext } from "react";
// import { Context } from "../Store/appContext";

const CharSingle = () => {
  let [episodes, setEpisode] = useState("");
  // const { actions, store } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${params.id}`)
      .then((res) => res.json())
      .then((epiData) => setEpisode(epiData));
  }, []);

  return (
    <div className="card bg-dark text-white">
      <div>
        <img src={rickandmortcouch} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{episodes.name}</h5>
          <p className="card-text">EN CONSTRUCCION</p>
          <ul>
            {/* <li>{episodes.characters[0]}</li>
            <li>{episodes.characters[1]}</li>
            <li>{episodes.characters[2]}</li>
            <li>{episodes.characters[3]}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharSingle;
