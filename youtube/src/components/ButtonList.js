import React from "react";
import Button from "./Button.js";

const ButtonList = () => {
  return (
    <div className=" flex flex-row gap-4 w-full border-2">
      <Button name="live" />
      <Button name="Music" />
      <Button name="Trending" />
      <Button name="Cricket" />
      <Button name="Your Video" />
      <Button name="Code" />
      <Button name="javaScript" />
      <Button name="Frontend" />
    </div>
  );
};

export default ButtonList;
