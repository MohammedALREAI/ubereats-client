import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { authTokenVar, isLoginVar } from "../Hocks/useApollo";
import { Button } from "../components/button";
import {MessageError}from'../components/Form/errorrMessage'
import { Input } from "../components/Form/input";
import { LOCALSTORAGE_TOKEN } from "../cosntatns";
import { useLoginMutationMutation as useLoginMutation } from "../generated/graphql";
import nuberLogo from "../images/logo.svg";


interface ILoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    getValues,
    errors,
    watch,
    reset,
    handleSubmit,
    formState,
    
  } = useForm<ILoginForm>({
    mode: "onChange",
    defaultValues:{
      email:"",
      password:""
    }
  });

  const [loginMutation, { data, loading,error }] = useLoginMutation({
    onCompleted:(data)=>{
      const {
        login: { ok, token },
      } = data;
      if (ok && token) {
        localStorage.setItem(LOCALSTORAGE_TOKEN, token);
        authTokenVar(token);
        isLoginVar(true);
      }

    },
  });
  const { email, password } = getValues();

  const onSubmit = () => {
    if (!loading) {
      loginMutation({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });
    }
  };
  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <Helmet>
        <title>Login | Nuber Eats</title>
      </Helmet>
      <div className="w-full max-w-screen-sm flex flex-col px-5 items-center">
        <img src={nuberLogo} className="w-52 mb-10" alt="Nuber Eats" />
        <h4 className="w-full font-medium text-left text-3xl mb-5">
          Welcome back
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 mt-5 w-full mb-5"
        >
          <Input
            ref={register({
              required: "Email is required",
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            name="email"
            required
            defaultValue={email}
            value={watch().email}
            type="email"
            placeholder="Email"
            className="input"
          />
          {errors.email?.type === "pattern" && (
            <MessageError message={"Please enter a valid email"} />
          )}
          {errors.email?.message && (
            <MessageError message={errors.email?.message} />
          )}
          <input
            ref={register({ required: "Password is required" })}
            required
            name="password"
            type="password"
            value={watch().password}
            placeholder="Password"
            className="input"
          />
          {errors.password?.message && (
            <MessageError message={errors.password?.message} />
          )}
          <Button
            canClick={formState.isValid}
            loading={loading}
            actionText={"Log in"}
          />
          {data?.login.error && (
            <MessageError message={data.login.error} />
          )}
        </form>
        <div>
          New to Nuber?{" "}
          <Link to="/create-account" className="text-lime-600 hover:underline">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};
