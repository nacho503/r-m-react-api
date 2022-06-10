import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import CharCard from "../Components/CharCard";

//Context
import { useContext } from "react";
import { Context } from "../Store/appContext";

let CharCards = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <div className="cardsContainer row row-cols-5 d-flex justify-content-center">
      {store.characters.length > 0
        ? store.characters.map((char, i) => (
            <CharCard
              key={i}
              id={char.id}
              name={char.name}
              image={char.image}
              species={char.species}
              gender={char.gender}
              origin={char.origin.name}
            ></CharCard>
          ))
        : console.log("Not loaded")}
    </div>
  );
};

export default CharCards;
