import React from "react";

const Card = ({ name, age, desc }) => {
  // console.log(props.info.name);

  return (
    <div className="w-[210px] h-[220px] shadow-xl border-2">
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>{age}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
