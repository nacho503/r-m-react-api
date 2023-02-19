let urlEpisodes = "https://rickandmortyapi.com/api/episode";
let urlCharacters = "https://rickandmortyapi.com/api/character/?page=";

const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      characters: [],
      episodes: [],
      favorites: [],
      renderPagination: false,
      currentPageDisplay: [1, 2, 3],
    },
    actions: {
      getCharacters: () => {
        let store = getStore();
        fetch(urlCharacters + store.currentPage)
          .then((res) => res.json())
          .then((charData) => setStore({ characters: charData.results }));
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
      incrementCurrPage: () => {
        const store = getStore();
        let nextPageDisp = [...store.currentPageDisplay].map(
          (pageN) => pageN + 1
        );

        // setStore({ currentPage: nextPageDisp });
        console.log(nextPageDisp);
      },
    },
  };
};

export default getState;
