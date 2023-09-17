import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

import { useFormik } from "formik";

// import { createUser } from "../../services/auth/createUser";
import { basicSchema } from "./schemas";
import "../../styles/auth/authForm.scss";

export const Register = () => {
  const toast = useRef(null);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    // const users = await createUser(values);
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Account created",
      life: 3000,
    });
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      city: "",
      zip: "",
      // cart: []
      cart: [{ productId: "", quantity: 0 }],
    },

    validationSchema: basicSchema,

    onSubmit: onSubmit,
  });

  // console.log('formik', formik );
  // console.log('errors ', formik.errors);

  const handleSignup = async () => {
    // const users = await createUser(formik.values);
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Account created",
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <section className="form">
        <h1 className="form__title">Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form__inputContainer p-float-label">
            <InputText
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={`${
                formik.errors.name && formik.touched.name ? "input-invalid" : ""
              }`}
            />
            <label htmlFor="name">User name</label>
          </div>

          <div className="form__inputContainer p-float-label">
            <InputText
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              className={`${
                formik.errors.password && formik.touched.password
                  ? "input-invalid"
                  : ""
              }`}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form__inputContainer p-float-label">
            <InputText
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              className={` ${
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "input-invalid"
                  : ""
              }`}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>

          <div className="form__inputContainer p-float-label">
            <InputText
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              className={`${
                formik.errors.email && formik.touched.email
                  ? "input-invalid"
                  : ""
              }`}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form__inputContainer p-float-label">
            <InputText
              id="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={`${
                formik.errors.country && formik.touched.country
                  ? "input-invalid"
                  : ""
              }`}
            />
            <label htmlFor="country">Country</label>
          </div>

          <div className="form__inputContainer p-float-label">
            <InputText
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              type="text"
              className={`${
                formik.errors.city && formik.touched.city ? "input-invalid" : ""
              }`}
            />
            <label htmlFor="city">City</label>
          </div>

          <div className="form__inputContainer p-float-label">
            <InputText
              id="zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={`${
                formik.errors.zip && formik.touched.zip ? "input-invalid" : ""
              }`}
            />
            <label htmlFor="zip">Zip</label>
          </div>

          <Button
            label="Register"
            className="form__button"
            type="submit"
            disabled={formik.isSubmitting}
          />

          <p className="form__linkForm">
            Already have an account?{" "}
            <a
              className="text-primary"
              href="/sign_in"
            >
              Sign In
            </a>
          </p>
        </form>
      </section>
    </>
  );
};
