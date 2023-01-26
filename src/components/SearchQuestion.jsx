import React from "react";

function SearchQuestion({ filter, setFilter }) {
  return (
    <div className="d-flex justify-content-center pb-5">
      <input
        className="form-control w-50"
        value={filter}
        placeholder="Search Question.."
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchQuestion;
