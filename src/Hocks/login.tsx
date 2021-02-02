import React from 'react';
import { useForm, } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {schema  } from "../helper/LoginSchema";

interface IFormInput {
  email: String;
  password: String
}



const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)

  });
  const onSubmit = (data:any) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
        type="email"
        required
        placeholder="email"
        name="email" ref={register({ required: true, maxLength: 20 })} />

      <input name="password" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input type="submit" />
    </form>
  );
}

export default Login
