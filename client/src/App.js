import { Route, Routes } from "react-router-dom";
import "../../client/src/index.css";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
