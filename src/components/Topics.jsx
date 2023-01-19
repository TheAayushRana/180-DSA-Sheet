import React from "react";
import Questions from "../Data/Questions.json";

export default function List() {
  //   console.log(Questions);
  //   console.log(Object.keys(Questions));
  const array = Object.keys(Questions);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around px-5">
        {array.map((item) => (
          <div
            key={item}
            className="card d-flex flex-wrap justify-content-center mb-4 p-3"
            style={{ flex: "0 0 30%", height: "100px" }}
          >
            <h5 className="card-title">{item.toUpperCase() + " "}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Total Questions:</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
