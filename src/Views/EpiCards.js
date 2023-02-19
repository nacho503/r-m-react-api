import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import EpiCard from "../Components/EpiCard";

//Context
import { useContext } from "react";
import { Context } from "../Store/appContext";

let EpiCards = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getEpisodes();
    actions.renderPaginationAct();
  }, []);

  return (
    <div className="cardsContainer row row-cols-5 d-flex justify-content-center">
      {store.episodes.length > 0
        ? store.episodes.map((episode, i) => (
            <EpiCard
              key={i}
              id={episode.id}
              name={episode.name}
              air_date={episode.air_date}
              episode={episode.episode}
            ></EpiCard>
          ))
        : console.log("Not loaded")}
    </div>
  );
};

export default EpiCards;
