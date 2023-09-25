export const validate = (values) => {
  //it return a error oject
  let error = {};
  if (!values.name) {
    error.name = "Required";
  }
  if (!values.email) {
    error.email = "Required";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
    error.email = "InValid Email";
  }
  if (!values.channel) {
    error.channel = "Required";
  }
  return error;
};
export const initialValues = {
  name: "Abhishek",
  email: "",
  channel: "",
};
export const onSubmit = (value) => {
  //here we can have the api call for sending the data
  console.log(value);
};
