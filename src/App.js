import "./App.css";
import Header from "./Layout/Header/Header";
import Gallery from "./Components/Gallery/Gallery";
import Body from "./Layout/Body/Body";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
