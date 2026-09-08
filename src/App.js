import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="App-logo" aria-label="Dictionary app">
            Dictionary
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="shine" />
        </main>
        <footer className="text-center">
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/sorayacarvajal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soraya Carvajal
            </a>{" "}
            and is {""}
            <a
              href="https://github.com/icuestiona/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
