import React from "react";
import ReactLoading from "react-loading";

import './App.css';
function App() {
  return (
    <div className="App">
      <h1>ITPM PROJECT</h1>
      <div className="anima">
        <ReactLoading
            type="spinningBubbles"
            color="#0000FF"
            height={200}
            width={100}
        />
      </div>
    </div>
  );
}

export default App;
