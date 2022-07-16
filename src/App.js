import { CharacterList } from "./pages/CharacterList";
import { CharacterDetail } from "./pages/CharacterDetail";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharacterList />} />
        <Route exact path="/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
