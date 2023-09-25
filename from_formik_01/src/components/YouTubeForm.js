import React from "react";
import { formik, useFormik } from "formik";
import {
  validate,
  initialValues,
  onSubmit,
  validationSchema,
} from "../config/helper.js";
const YouTubeForm = () => {
  //useFormik hook setup
  const formik = useFormik({
    initialValues,
    validationSchema,

    onSubmit,
  });
  //this hook returb the method properity for functionality
  //   console.log(formik);
  // formik.value is trigger on formikHandler attached with event
  // console.log(formik.values);
  // console.log(formik.errors);
  console.log(formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: "red" }}>{formik.errors.name}</div>
      ) : null}
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // value={}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      <br />
      <label htmlFor="channel">Channel</label>
      <input
        type="text"
        name="channel"
        id="channel"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.channel && formik.errors.channel ? (
        <div style={{ color: "red" }}>{formik.errors.channel}</div>
      ) : null}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default YouTubeForm;
