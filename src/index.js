import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from "./home";
import Resume from "./resume";
import Transcript from "./transcript";
import Experience from "./experience";
import Cooperative from "./cooperative";
import Graduation from "./graduation";
import Coursework from "./coursework";
import SA from "./SA";
import IP from "./IP";
import DB from "./DB";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/transcript" element={<Transcript />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/cooperative" element={<Cooperative />} />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/SA" element={<SA />} />
        <Route path="/IP" element={<IP />} />
        <Route path="/DB" element={<DB />} />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
//https://medium.com/@swarajgosavi20/how-to-deploy-react-app-with-client-side-routing-on-github-pages-8a3fefe5b0d5
