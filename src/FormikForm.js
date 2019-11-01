import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error.js";

// .object() b/c it resembles the shape of data.
// Our OBJECT from initialValues { name: "", email: "" }
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(255, "Must be shorter than 255")
    .required("Must enter a name"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(255, "Must be shorter than 255")
    .required("Must enter an email")
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <form>
          {/* {JSON.stringify(values)} */}
          <div>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
              // onBlur: when user leaves field, checks if 'touched'
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? "has-errors" : null}
            ></input>
            <Error touched={touched.name} message={errors.name} />
          </div>

          <div>
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-errors" : null}
            ></input>
            <Error touched={touched.email} message={errors.email} />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </Formik>
  );
}
