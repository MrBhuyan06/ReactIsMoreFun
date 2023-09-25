import React from "react";
import { formik, useFormik } from "formik";
const YouTubeForm = () => {
  //useFormik hook setup
  const formik = useFormik({
    initialValues: {
      name: "Abhishek",
      email: "",
      channel: "",
    },
    onSubmit: (value) => {
      //here we can have the api call for sending the data
      console.log(value);
    },
  });
  //this hook returb the method properity for functionality
  //   console.log(formik);
  // formik.value is trigger on formikHandler attached with event
  console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        // value={}
      />
      <br />
      <label htmlFor="channel">Channel</label>
      <input
        type="text"
        name="channel"
        id="channel"
        onChange={formik.handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default YouTubeForm;
