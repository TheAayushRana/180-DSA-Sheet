import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Topic() {
  const { topicName } = useParams();
  return (
    <div>
      <p className="text-center fs-4 fw-semibold">
        <Link to="/">Topics</Link>/
        {topicName.charAt(0).toUpperCase() + topicName.slice(1) + " "}
      </p>
    </div>
  );
}
