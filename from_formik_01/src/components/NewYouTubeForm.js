import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { initialValues, onSubmit, validationSchema } from "../config/helper.js";
const NewYouTubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage name="name" />
        <br />
        <label htmlFor="email">Email</label>
        <Field
          type="email"
          name="email"
          id="email"

          // value={}
        />
        <ErrorMessage name="email" />
        <br />
        <label htmlFor="channel">Channel</label>
        <Field type="text" name="channel" id="channel" />
        <ErrorMessage name="channel" />
        <br />
        <div>
          <label htmlFor="comment">Comment</label>
          <Field as="textarea" name="comment" id="comment" />
        </div>
        {/* Render prop objecv */}
        <label htmlFor="address">Address</label>
        <Field name="address">
          {(props) => {
            console.log(props);
            const { field, form, meta } = props;
            return <input type="text" id="address" {...field} />;
          }}
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NewYouTubeForm;
