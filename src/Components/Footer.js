import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";

import { useContext } from "react";
import { Context } from "../Store/appContext";

import { useEffect, useState } from "react";

let Footer = () => {
  const { actions, store } = useContext(Context);
  const [curNumb, setCurrNum] = useState([1, 2, 3]);

  useEffect(() => {
    actions.renderPaginationAct();
  }, []);

  let numClickHandler = (e) => {
    e.preventDefault();
    let numb = e.target.getAttribute("value");
    console.log(numb);
    actions.changeCurrPage(numb);
  };

  let incrementCurrPage = (e) => {
    e.preventDefault();
    let newNumbs = [...curNumb].map((num) => num + 3);
    setCurrNum(newNumbs);
  };

  let decreaseCurrPage = (e) => {
    e.preventDefault();
    let newNumbs = [...curNumb].map((num) => num + -3);
    if (newNumbs[0] < 1) {
      newNumbs = [1, 2, 3];
    }
    setCurrNum(newNumbs);
  };

  return (
    <div className="footer d-flex d-flex flex-column">
      <p>© ByNacho503</p>
      {store.renderPagination && (
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <button
                className="btn btn-secondary"
                tabindex="-1"
                onClick={decreaseCurrPage}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/#"
                onClick={numClickHandler}
                value={curNumb[0]}
              >
                {curNumb[0]}
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/#"
                onClick={numClickHandler}
                value={curNumb[1]}
              >
                {curNumb[1]}
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/#"
                onClick={numClickHandler}
                value={curNumb[2]}
              >
                {curNumb[2]}
              </a>
            </li>
            <li className="page-item">
              <button
                type="button page-link"
                className="btn btn-secondary"
                onClick={incrementCurrPage}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Footer;
