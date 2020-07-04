import React from "react";
import NxTimeLine from "./component/NxTimeLine/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Wall from "./component/NxWall/NxWall";
import NxInterest from "./component/NxInterest";
import { interestList } from "./component/NxInterest/Data";

function App() {
  return (
    <div className="App">
      <Wall />
    </div>
  );
}

export default App;
