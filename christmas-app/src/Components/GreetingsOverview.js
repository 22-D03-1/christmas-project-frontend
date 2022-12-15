import React from "react";
import { useState } from "react";

function GreetingsOverview() {
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);
  const christmas = require("merry-christmas");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const Clickhandler = (e) => {
    setUpdated(message);
  };
  return (
    <div className="container">
      <h1 className="title">Welcome to our Christmas app</h1>
      <input
        className="input"
        type="text"
        value={message}
        name="message"
        onChange={handleChange}
      />

      <h2 className="text"> {updated}</h2>

      <button className="click" onClick={Clickhandler}>
        Add
      </button>
    </div>
  );
}

export default GreetingsOverview;
