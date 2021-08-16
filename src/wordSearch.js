import React, { useState } from "react";
import "./wordSearch.css";
import axios from "axios";
import Results from "./Results";

export default function WordSearch() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="WordSearch">
      <form onSubmit={search}>
        <div className="search-form">
          <input
            type="search"
            autoFocus={true}
            className="form-contrl"
            onChange={handleKeywordChange}
          />
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
