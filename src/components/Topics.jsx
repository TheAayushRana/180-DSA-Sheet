import React, { useContext } from "react";
import Questions from "../Data/Questions.json";
import { Link } from "react-router-dom";
import "./Topics.css";
import ManageContext from "./context/ManageContext";

export default function Topics() {
  const { darkMode } = useContext(ManageContext);

  const lists = Object.keys(Questions);
  return (
    <div>
      <h3
        className={`top-heading text-center fs-4 fw-semibold ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Your Gateway to crack DSA 🔥
      </h3>
      <h3
        className={`text-center fs-4 fw-semibold ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Start Solving
      </h3>
      <div className="d-flex flex-wrap justify-content-around px-5 py-4">
        {lists.map((item) => (
          <div
            key={item}
            className="topic-card card d-flex flex-wrap justify-content-center mb-4 p-3"
          >
            <Link
              to={`/${item}`}
              key={item}
              className="text-decoration-none w-100"
            >
              <div className="row d-flex align-items-center">
                <div className="col">
                  <p className="card-title fs-5 fw-semibold">
                    {item.charAt(0).toUpperCase() + item.slice(1) + " "}
                  </p>
                  <p className="card-subtitle mb-2 text-muted fw-semibold">
                    Total Questions: {Questions[item].length}
                  </p>
                </div>
                <div className="col">
                  <button type="button" className="startnowbtn">
                    Start Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
