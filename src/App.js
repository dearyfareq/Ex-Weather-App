import React from "react";
import Input from "./components/input";
import "./App.scss"
function App() {
  return (
    <div>
<div id="stars-container">
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
</div>
<div className="parent-container">
  <Input />
  <Input />
  <Input />
</div>
</div>);
}

export default App;
