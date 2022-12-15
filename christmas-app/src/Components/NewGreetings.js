import React from "react";
import Typewriter from "typewriter-effect";
import "../App.css";
function NewGreetings() {
  const christmas = require("merry-christmas");
  return (
    <div className="newBody">
      <h1 className="title"> Merry Christmas</h1>
      <p className="ask">Find your Greeting-Message:</p>

      <span className="message">
        <Typewriter
          options={{
            strings: [`${christmas.random()}`],
            autoStart: true,
            delay: 50,
            pauseFor: 5000,
          }}
        />
      </span>
    </div>
  );
}

export default NewGreetings;
