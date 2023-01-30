import React from "react";
import { Link } from "react-router-dom";
import SearchTopic from "./SearchTopic";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-info text-dark bg-opacity-10">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
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
        </div>
      </div>
    </nav>
  );
}
