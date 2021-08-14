import React, {useState} from "react";
import "./wordSearch.css";
import axios from "axios";

export default function WordSearch() {
    let [keyword, setKeyword] = useState("");

function handleResponse(response){
    console.log(response.data[0]);
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
        <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
    </form>
    </div>
    )
}
