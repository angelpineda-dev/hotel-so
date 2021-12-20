import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Faq from "./screens/Faq";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
