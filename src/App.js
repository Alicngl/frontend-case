import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/pages/Hero";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
