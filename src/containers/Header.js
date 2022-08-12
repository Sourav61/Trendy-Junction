import React from "react";
import "../App.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white ">
      <div className="container-fluid ">
        <img
          src={require("../images/brand2.jpeg")}
          style={{ height: "5em", width: "13em", borderRadius: "0.7em" }}
        />
        {/* <a className="navbar-brand text-white" href="#">Fake Shop</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 ml d-flex justify-content-end flex-1"
            style={{ flex: 1 }}
          >
            <li className="nav-item  float-right">
              <a
                className="nav-link active text-white "
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link active text-white "
                aria-current="page"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
