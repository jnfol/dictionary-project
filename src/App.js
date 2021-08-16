import "./App.css";
import WordSearch from "./wordSearch";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1>Dictionary</h1>
          <p className="Instructions">Search for a word</p>
          <WordSearch />
        </header>
        <main></main>
      </div>
      <footer>Coded by Jessi Follett</footer>
    </div>
  );
}

export default App;
