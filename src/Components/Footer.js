import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";

import { useContext } from "react";
import { Context } from "../Store/appContext";

import { useEffect } from "react";

let Footer = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.renderPaginationAct();
  }, []);

  return (
    <div className="footer d-flex d-flex flex-column">
      <p>© CopyRight</p>
      {store.renderPagination && (
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="/#" tabindex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                {store.currentPageDisplay[0]}
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                {store.currentPageDisplay[1]}
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                {store.currentPageDisplay[2]}
              </a>
            </li>
            <li className="page-item">
              <button
                type="button page-link"
                className="btn btn-secondary"
                onClick={actions.incrementCurrPage()}
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
