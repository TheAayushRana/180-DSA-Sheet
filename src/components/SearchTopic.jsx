import React, { useState } from "react";

function SearchTopic() {
  const [searchValue, setSearchValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Topic Name..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="btn btn-outline-primary" onClick={submitHandler}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchTopic;
