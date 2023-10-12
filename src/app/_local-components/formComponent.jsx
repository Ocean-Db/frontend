"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";




const FormComponent = () => {
  const { register, formState, handleSubmit, control } = useForm();
  const { errors } = formState;
  const [notify, setnotify] = useState(false)

   const onSubmit = (data) => {
    console.log(data);
    setnotify(true)
    setTimeout(() => {
      setnotify(false)
    }, 4000);
  };
  

  return (
    <>
      <div className="mb-10 p-7 bg-slate-50">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-10 mt-2">
            <div>
              <Select
                className="w-[100%] border-zinc-100"
                {...register("servers", {
                  required: false,
                  message: "Please select database",
                })}
              >
                <SelectTrigger className="w-[100%]">
                  <SelectValue placeholder="Select database" />
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectLabel className="">Servers</SelectLabel>
                      <SelectItem
                        className="p-2 hover:bg-blue-500"
                        value="MySql server"
                      >
                        MySql server
                      </SelectItem>
                      <SelectItem className="p-2" value="Amazon server">
                        Amazon server
                      </SelectItem>
                      <SelectItem className="p-2" value="MongoDB server">
                        MongoDB server
                      </SelectItem>
                      <SelectItem className="p-2" value="Google Cloud server">
                        Google Cloud server
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <p className="text-red-500">{errors.servers?.message}</p>
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
                  required: { value: true, message: "Database is required" },
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
              <p className="text-red-500 px-2 text-xs">
                {errors.username?.message}
              </p>
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
              <p className="text-red-500 px-2 text-xs">
                {errors.password?.message}
              </p>
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
          {notify ? <div className='text-green-600 text-lg py-3'>You have successfully integrated your data!</div> : null}
          </div>
    </>
  );
};
export default FormComponent;
