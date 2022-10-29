import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="shine" />
        </main>
        <footer className="text-center">
          <footer>
            <small>
              Coded by{" "}
              <a
                href="https://stellar-donut-875afe.netlify.app/about.html"
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
        </footer>
      </div>
    </div>
  );
}

export default App;
