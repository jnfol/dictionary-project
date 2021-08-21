import React, { useState } from "react";
import "./wordSearch.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function WordSearch() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000019c0fd2faa70049ca83f85a611746d011";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="WordSearch">
      <section className="Form">
        <form onSubmit={search}>
          <div className="search-form" id="Search">
            <input
              type="search"
              autoFocus={true}
              className="form-contrl"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            />
          </div>
        </form>
      </section>
      <section className="Results">
        <Results results={results} />
      </section>
      <Photos photos={photos} />
    </div>
  );
}
