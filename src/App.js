import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/pages/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
