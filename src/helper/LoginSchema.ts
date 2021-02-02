import { UserRole } from './../generated/graphql';
import * as yup from "yup";
export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string() .required(),
});


export const schemaCreateAccount=yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string() .required(),
  role: yup.mixed<UserRole>().oneOf(Object.values(UserRole))
});