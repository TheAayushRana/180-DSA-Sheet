import React from "react";
import { Link, useParams } from "react-router-dom";
import MainTable from "./MainTable";
import Questions from "../Data/Questions.json";

export default function Topic() {
  const { topicName } = useParams();
  return (
    <div>
      <p className="text-center fs-4 fw-semibold pb-2">
        <Link to="/">Topics</Link>/
        {topicName.charAt(0).toUpperCase() + topicName.slice(1) + " "}
      </p>
      <MainTable content={Questions[topicName]} />
    </div>
  );
}
