import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Rooms from "./screens/Rooms";
import About from "./screens/About";
import Faq from "./screens/Faq";
import NotFound from "./screens/NotFound";
import Room from "./screens/Room";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<Room />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
