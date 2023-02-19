let urlEpisodes = "https://rickandmortyapi.com/api/episode/?page=";
let urlCharacters = "https://rickandmortyapi.com/api/character/?page=";

const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      characters: [],
      episodes: [],
      favorites: [],
      renderPagination: false,
      currentPageDisplay: 1,
    },
    actions: {
      getCharacters: () => {
        let store = getStore();
        if (store.currentPageDisplay > 42) {
          setStore({ currentPageDisplay: 42 });
        }
        fetch(urlCharacters + store.currentPageDisplay)
          .then((res) => res.json())
          .then((charData) => setStore({ characters: charData.results }));
      },

      getEpisodes: () => {
        let store = getStore();
        if (store.currentPageDisplay > 3) {
          setStore({ currentPageDisplay: 3 });
        }
        fetch(urlEpisodes + store.currentPageDisplay)
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
      renderPaginationAct: () => {
        if (
          window.location.pathname.includes("/home") ||
          window.location.pathname.includes("/r-m-react-api")
        ) {
          setStore({ renderPagination: false });
        } else {
          setStore({ renderPagination: true });
        }
      },
      changeCurrPage: (page) => {
        let actions = getActions();
        setStore({
          currentPageDisplay: page,
        });
        actions.getCharacters();
        actions.getEpisodes();
      },
    },
  };
};

export default getState;
