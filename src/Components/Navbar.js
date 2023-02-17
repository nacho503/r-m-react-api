import "bootstrap/dist/css/bootstrap.css";
import rickandmortyLogo from "../img/rickandmortyLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Context
import { useContext } from "react";
import { Context } from "../Store/appContext";

//
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

//
import { faTrash } from "@fortawesome/free-solid-svg-icons";

let Navbar = () => {
  const { actions, store } = useContext(Context);

  const deleteFavHandler = (i) => {
    let arregloFiltrado = store.favorites.filter(
      (element, index) => index !== i
    );
    actions.deleteFavorite(arregloFiltrado);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-rickandmorty sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={rickandmortyLogo}></img>
          </a>
          <div className="navbar-toggler-container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">. . .</span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/characters" className="nav-link active">
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/episode" className="nav-link active">
                  Episodes
                </Link>
              </li>
              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Favorites
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {store.favorites.map((fav, i) => (
                    <li key={i}>
                      <a className="dropdown-item" href="#">
                        {fav}{" "}
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => deleteFavHandler(i)}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
