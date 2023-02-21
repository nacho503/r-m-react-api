import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CharCard.css";
import rickandmortcouch from "../img/rick&mortyimg.jpg";

import "bootstrap/dist/css/bootstrap.css";

const CharSingle = () => {
  let [episodes, setEpisode] = useState("");
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
          <p className="card-text">Under construction</p>
        </div>
      </div>
    </div>
  );
};

export default CharSingle;
