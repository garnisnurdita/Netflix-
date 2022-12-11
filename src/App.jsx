import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Movies from "./Components/Movies";

function App() {
  return (
    <div className="mainapp">
      <Navbar />
      <Main />
      <Movies />
    </div>
  );
}

export default App;
