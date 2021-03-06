import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "pages/Login";
import { SignUp } from "pages/SignUp";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { TVSeries } from "pages/TVSeries";
import { Bookmarked } from "pages/Bookmarked";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvseries" element={<TVSeries />} />
          <Route path="bookmarked" element={<Bookmarked />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
