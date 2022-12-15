import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import GreetingsOverview from "./Components/GreetingsOverview";
import NewGreetings from "./Components/NewGreetings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="new">
        <Routes>
          <Route path="/" element={<GreetingsOverview />} />
          <Route path="/new" element={<NewGreetings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
