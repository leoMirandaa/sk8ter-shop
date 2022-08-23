import * as yup from "yup"

const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/


export const basicSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email("Enter a valid email").required("Required"),
  password: yup
  .string()
  .min(5)
  .matches(passwordRules, {message: "create a stronger password"})
  .required("Required"),
  confirmPassword: yup
  .string()
  .oneOf([yup
  .ref('password'), null], "Password must match")
  .required("Required"),
  country: yup.string().required(),
  city: yup.string().required("Required"),
  zip: yup.number().positive().integer().required()
})