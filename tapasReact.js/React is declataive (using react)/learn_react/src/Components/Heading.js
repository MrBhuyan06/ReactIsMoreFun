import React from "react";

const Heading = () => {
  const whyReact = [
    "Component Basewd Architecture",
    "complex ui",
    "performance",
    "Simplicity",
  ];
  return (
    <div>
      <h1>React</h1>
      <p>React Is Open Source UI Library</p>
      <ul>
        <h2>Why React</h2>
        {whyReact.map((ele, index) => {
          return <li key={index}>{ele}</li>;
        })}
      </ul>
    </div>
  );
};

export default Heading;
