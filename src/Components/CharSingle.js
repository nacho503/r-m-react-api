import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Views/CharCard.css";

import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Context
import { useContext } from "react";
import { Context } from "../Store/appContext";

import CharSingleView from "../Views/CharSingleView";

const CharSingle = () => {
  const [char, setChar] = useState("");
  const { actions, store } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((res) => res.json())
      .then((charData) => setChar(charData));
  }, []);

  return (
    <div>
      <CharSingleView
        name={char.name}
        id={char.id}
        image={char.image}
        specie={char.species}
        status={char.status}
        type={char.type}
        gender={char.gender}
        episodes={char.episode}
      />
    </div>
  );
};

export default CharSingle;
