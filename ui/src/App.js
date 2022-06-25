import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./components/Home2";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
