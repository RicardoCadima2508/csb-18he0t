import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<Home />} />

            <Route path="Home2" element={<Home2 />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <nav>
        <div>
          <Link to="Home">Home</Link>
        </div>
        <div>
          <Link to="Home2">Home2</Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
