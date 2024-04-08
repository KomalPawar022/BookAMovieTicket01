import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="m-2">
      <h1 className="flex font-bold m-2 text-xl">Book Movie Tickets</h1>
      <Movie />
    </div>
  );
}

export default App;
