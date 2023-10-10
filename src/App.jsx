import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/:query/:startIndex" exact element={<SearchResult />} />
    </Routes>
  );
}

export default App;
