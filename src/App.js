import "./App.css";
import Search from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <footer>
        <p>
          This project was coded by
          <a
            className="App-link"
            href="https://github.com/meta100py"
            target="_blank"
            rel="noopener noreferrer"
          >
            Valen
          </a>
          and is on
          <a
            href="https://github.com/meta100py/homework-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          and
          <a href="#" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
