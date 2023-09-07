import React from "react";
import { PERSON } from "../contants.js";
import Card from "./Card.js";
const Body = () => {
  console.log(PERSON);
  return (
    <div>
      <div className="flex  justify-center  gap-4 flex-wrap">
        {PERSON.map((person) => {
          return <Card info={person} />;
        })}
      </div>
    </div>
  );
};

export default Body;
