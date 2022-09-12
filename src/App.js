import React from "react";
import { Route, Routes } from "react-router-dom";

import Page from "./components/Page";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/page/:page" exact element={<Page />} />
      </Routes>
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
