import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Sara and is
          <a
            href="https://github.com/sarakhaghani/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sorced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
