import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Recipe from "./pages/Recipes";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recipes" element={<Recipe/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
