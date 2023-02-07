import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MainTable from "./MainTable";
import Questions from "../Data/Questions.json";
import ManageContext from "./Context/ManageContext";

export default function Topic() {
  const { darkMode } = useContext(ManageContext);
  const { topicName } = useParams();
  return (
    <div>
      <p
        className={`text-center fs-4 fw-semibold pb-2 ${
          darkMode ? "text-white" : "text-dark"
        }`}
      >
        <Link to="/">Topics</Link>/
        {topicName.charAt(0).toUpperCase() + topicName.slice(1) + " "}
      </p>
      <MainTable content={Questions[topicName]} />
    </div>
  );
}
