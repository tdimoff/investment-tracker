import * as yup from "yup";

export const validationSchema = yup.object().shape({
  type: yup.string().required("Type is required"),
  value: yup.number().required("Value is required"),
  date: yup.string().required("Date is required"),
  status: yup.string().required("Status is required"),
  name: yup.string().required("Name is required"),
});
