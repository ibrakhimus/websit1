import React from "react";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav__container">
          <ul className="nav__link--list">
            <li className="nav__link">
              <a
                href="/"
                className="
                    nav__link--anchor 
                    nav__link--anchor-logo
                    "
              >
                <b>SKINSTRIC</b>
              </a>
            </li>
            <li className="nav__link">
              <a
                href="/"
                className="
                    nav__link--anchor 
                    link__hover-effect
                    "
              >
                <b>[ INTRO ]</b>
              </a>
            </li>
            <li className="nav__link">
              <a
                href="/"
                className="
                    nav__link--anchor
                    link__hover-effect
                    "
              >
                A.I. SYSTEM
              </a>
            </li>
            <li className="nav__link">
              <a
                href="/"
                className="
                    nav__link--anchor 
                    link__hover-effect
                    "
              >
                PRODUCT
              </a>
            </li>
            <li className="nav__link">
              <a
                href="/"
                className="
                    nav__link--anchor
                    link__hover-effect
                    "
              >
                DEMO
              </a>
            </li>
            <li className="nav__link">
              <a
                href="/"
                className="
                    nav__link--anchor
                    link__hover-effect
                    "
              >
                BETA TEST
              </a>
            </li>
          </ul>

          <div className="nav__buttons">
            <a href="/get-started" className="get__started--button styl-1">GET STARTED</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
