import React from "react";
import { formik } from "formik";
const YouTubeForm = () => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <br />
      <label htmlFor="channel">Channel</label>
      <input type="text" name="channel" id="channel" />
      <br />
      <button type="submit">Submit</button>
    </div>
  );
};

export default YouTubeForm;
