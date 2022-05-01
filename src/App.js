import Page from "./Page";
import "./App.css";

const App = () => {
  console.log("App");
  return (
    <div className="App">
      <Page />
      <center>
        <strong>
          Created By: <a href="https://github.com/Gameonn">Gameonn</a>{" "}
        </strong>
        - devChallenges.io
      </center>
    </div>
  );
};

export default App;
