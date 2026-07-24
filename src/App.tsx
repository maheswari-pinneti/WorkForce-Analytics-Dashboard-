import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workforce from "./pages/Workforce";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workforce />} />
        <Route path="/workforce" element={<Workforce />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;