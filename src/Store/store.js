let urlEpisodes = "https://rickandmortyapi.com/api/episode";
let urlCharacters = "https://rickandmortyapi.com/api/character/";

const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      characters: [],
      episodes: [],
      favorites: [],
    },
    actions: {
      getCharacters: () => {
        let store = getStore();
        fetch(urlCharacters + "?page=1")
          .then((res) => res.json())
          .then((charData) => setStore({ characters: charData.results }));
        console.log(store.characters);
      },

      getEpisodes: () => {
        fetch(urlEpisodes)
          .then((res) => res.json())
          .then((epiData) => setStore({ episodes: epiData.results }));
      },
      addFavorite: (favorite) => {
        const store = getStore();
        setStore({ favorites: [...store.favorites, favorite] });
        let uniqueFavSet = [...new Set(store.favorites)]; // Hace un SET del arreglo para no tener valores duplicados
        setStore({ favorites: Array.from(uniqueFavSet) }); // PAsa del set al arreglo
      },
      deleteFavorite: (newFavorites) => {
        setStore({
          favorites: newFavorites,
        });
      },
    },
  };
};

export default getState;
