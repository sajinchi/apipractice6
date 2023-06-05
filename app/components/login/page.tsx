"use client";
import { loginResponse } from "@/app/services/product.services";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface LoginValues {
  username: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({ mode: "all" });
  const router = useRouter();

  const onSubmit = async (data: LoginValues) => {
    let res = await loginResponse(data.username, data.password);
    if (res) {
      localStorage.setItem("logininfo", JSON.stringify(res));
      router.push("/");
    }
  };
  return (
    <div className=" bg-slate-100">
      <div className="flex flex-col space-y-2 m-auto w-1/5 p-10 bg-white">
        <div className="flex text-3xl items-center justify-center ">Login</div>
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-2">
          <div className="flex flex-col">
            <label>Username:</label>
            <input
              {...register("username", {
                required: { value: true, message: "Username is required" },
              })}
              type="text"
              className=" border-2 border-gray-500 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
              type="password"
              className=" border-2 border-gray-500 rounded-md outline-none"
            />
          </div>
          <button className=" bg-violet-400 rounded-md py-1 px-3 hover:bg-violet-500 hover:text-white items-center">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
