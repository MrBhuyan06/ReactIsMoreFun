import * as yup from "yup";

//rewrite the validation schema using yup
export const validationSchema = yup.object({
  name: yup.string().required("required filed name"),
  email: yup.string().email("invalid email format").required("Required email"),
  channel: yup.string().required("Required channel"),
  address: yup.string().required().max(4, "must grt then 3"),
});

// export const validate = (values) => {
//   //it return a error oject
//   let error = {};
//   if (!values.name) {
//     error.name = "Required";
//   }
//   if (!values.email) {
//     error.email = "Required";
//   } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
//     error.email = "InValid Email";
//   }
//   if (!values.channel) {
//     error.channel = "Required";
//   }
//   return error;
// };
export const initialValues = {
  name: "Abhishek",
  email: "",
  channel: "",
  comment: "",
  address: "asw",
};
export const onSubmit = (value) => {
  //here we can have the api call for sending the data
  console.log(value);
};
