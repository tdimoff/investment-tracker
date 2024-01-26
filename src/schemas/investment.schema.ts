import * as yup from "yup";

export const validationSchema = yup.object().shape({
  type: yup
    .string()
    .required("Type is required")
    .oneOf(
      ["fixed-income", "stock", "commodity", "crypto"],
      "Type must be fixed-income, stock, commodity or crypto"
    ),
  value: yup
    .number()
    .typeError("Value must be a number")
    .required("Value is required"),
  date: yup.string().required("Date is required"),
  status: yup
    .string()
    .required("Status is required")
    .oneOf(["active", "closed"], "Status can only be active or closed"),
  name: yup.string().required("Name is required"),
});
