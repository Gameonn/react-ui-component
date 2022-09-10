
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Page from "./components/Page";
import "./App.css";

import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/button" />} />
        <Route path="/input" element={Main} />
        <Route path="/button" element={Page} />
      </Routes>

      <Page />
      <center>
        <strong>
          Created By: <a href="https://github.com/Gameonn">Gameonn</a>
        </strong>
        - devChallenges.io
      </center>
    </div>
  );
};

export default App;
