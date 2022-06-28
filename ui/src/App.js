import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Home2" element={<Home2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
