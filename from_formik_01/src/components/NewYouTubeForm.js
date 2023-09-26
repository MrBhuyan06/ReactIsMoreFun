import React from "react";
import { formik, useFormik } from "formik";

import {
  validate,
  initialValues,
  onSubmit,
  validationSchema,
} from "../config/helper.js";
const NewYouTubeForm = () => {
  //useFormik hook setup
  const formik = useFormik({
    initialValues,
    validationSchema,

    onSubmit,
  });
  //this hook returb the method properity for functionality
  //   console.log(formik);
  // formik.value is trigger on formikHandler attached with event
  console.log(formik.values);
  // console.log(formik.errors);
  console.log(formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        {...formik.getFieldProps("name")}
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
        {...formik.getFieldProps("email")}
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
        {...formik.getFieldProps("channek")}
      />
      {formik.touched.channel && formik.errors.channel ? (
        <div style={{ color: "red" }}>{formik.errors.channel}</div>
      ) : null}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewYouTubeForm;
