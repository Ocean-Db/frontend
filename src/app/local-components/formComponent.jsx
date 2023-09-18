"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SelectElement from "./selectComponent";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const inputData = [
  { name: "hostname", placeholder: "Hostname or IP adress", type: "text" },
  { name: "portNumber", placeholder: "Port number", type: "number" },
  { name: "databaseName", placeholder: "Database name", type: "text" },
  { name: "username", placeholder: "Username", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
];
console.log(inputData.name);

const FormComponent = () => {
  const { register, formState, handleSubmit, control } = useForm();

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <div className="mb-10 p-10 bg-slate-50">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="my-10">
          <div>
            <SelectElement />
          </div>
          <div>
            <Input
              className="p-2 my-2 rounded-[5px] border-zinc-200"
              type="text"
              placeholder="Hostname or IP address"
              {...register("hostname", {
                required: { value: true, message: "Hostname is required" },
              })}
            />
            <p className="text-red-500 px-2 text-xs">
              {errors.hostname?.message}
            </p>
          </div>

          <div>
            <Input
              className="p-2 my-2 rounded-[5px] border-zinc-200"
              type="number"
              placeholder="Port number"
              {...register("portNumber", {
                required: { value: true, message: "Port number is required" },
              })}
            />
            <p className="text-red-500 px-2 text-xs">
              {errors.portNumber?.message}
            </p>
          </div>

          <div>
            <Input
              className="p-2 my-2 rounded-[5px] border-zinc-200"
              type="text"
              placeholder="Database name"
              {...register("dataBaseName", {
                required: { value: true, message: "Hostname is required" },
              })}
            />
            <p className="text-red-500 px-2 text-xs">
              {errors.dataBaseName?.message}
            </p>
          </div>

          <div>
          <Input
            className="p-2 my-2 rounded-[5px] border-zinc-200"
            type="text"
            placeholder="Username"
            {...register("username", {
              required: { value: true, message: "Username is required" },
            })}
          />
          <p className="text-red-500 px-2 text-xs">{errors.username?.message}</p>
          </div>

          <div>
          <Input
            className="p-2 my-2 rounded-[5px] border-zinc-200"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
            })}
          />
          <p className="text-red-500 px-2 text-xs">{errors.password?.message}</p>
          </div>


          <div>
            <Input
              className="p-2 my-2 rounded-[5px] border-zinc-200"
              type="file"
              placeholder="Upload Excel/CSV file"
            />
          </div>
        </div>
        <div className="w-100">
          <Button
            type="submit"
            className="bg-blue-500 text-white p-2 hover:bg-blue-400 w-[100%] rounded-[5px]"
          >
            Commit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
