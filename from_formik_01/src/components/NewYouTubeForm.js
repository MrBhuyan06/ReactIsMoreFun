import React from "react";
import { Formik, Form, useFormik, Field, ErrorMessage } from "formik";

import {
  validate,
  initialValues,
  onSubmit,
  validationSchema,
} from "../config/helper.js";
const NewYouTubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onsubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage />
        <br />
        <label htmlFor="email">Email</label>
        <Field
          type="email"
          name="email"
          id="email"

          // value={}
        />
        <ErrorMessage />
        <br />
        <label htmlFor="channel">Channel</label>
        <Field type="text" name="channel" id="channel" />
        <ErrorMessage />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NewYouTubeForm;
