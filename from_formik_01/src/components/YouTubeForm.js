import React from "react";
import { formik, useFormik } from "formik";
const YouTubeForm = () => {
  //useFormik hook setup
  const formik = useFormik({
    initialValues: {
      name: "Abhishek",
      email: "",
      Channel: "",
    },
  });
  //this hook returb the method properity for functionality
  //   console.log(formik);
  // formik.value is trigger on formikHandler attached with event
  // console.log(formik.values);

  return (
    <div>
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
    </div>
  );
};

export default YouTubeForm;
