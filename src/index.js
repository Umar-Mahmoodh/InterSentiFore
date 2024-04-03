import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Prediction from "./pages/Prediction"; // Assuming Prediction is a default export

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
