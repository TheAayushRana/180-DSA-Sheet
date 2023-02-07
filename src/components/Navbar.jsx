import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ManageContext from "./Context/ManageContext";
import SearchTopic from "./SearchTopic";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ManageContext);

  return (
    <nav
      className={`navbar navbar-expand-lg  ${
        darkMode ? "bg-dark bg-opacity-50" : "bg-info bg-opacity-10"
      }`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand fw-bold fs-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
          to="/"
        >
          180DSA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarScroll"
        >
          {/* <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          > */}
          {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li> */}
          {/* </ul> */}
          <SearchTopic />
          <div className="form-check form-switch ms-4">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={darkMode}
              onChange={() => setDarkMode((prevState) => !prevState)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
