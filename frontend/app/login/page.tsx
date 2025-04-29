"use client"

import { title } from "@/components/primitives";
import React from "react";
import {Form} from "@heroui/form";
import { Input } from "@heroui/input";
import { Select } from "@heroui/select";
import { SelectItem } from "@heroui/select";
import {Checkbox} from "@heroui/checkbox";
import { Button } from "@heroui/button";
import { useState } from "react";
import useStore from "@/stores/stores";
import { ValidationError } from "@react-types/shared";
import Link from "next/link";

export default function LoginPage(){
    //unpack the states
    const username = useStore((store)=>store.loginUserName)
    const setUsername = useStore((store)=>store.setLoginUserName)

    const password = useStore((store)=>store.loginPassword)
    const setPassword = useStore((store)=>store.setLoginPassword)

    const error = useStore((store)=>store.loginError)
    const setError = useStore((store)=>store.setLoginError)

    const submit = useStore((store)=>store.loginSubmit);
    const setSubmit = useStore((store)=>store.setLoginSubmit);
    
    const onSubmit = (e:any)=>{
        e.preventDefault();
        console.log(username)
        console.log(password.length);
    }

    const CustomFieldError = (val:string)=>{
        let splittedVal = val.split('');
        if(splittedVal.some((val)=>val === ' ')) return "Can not have any spaces."
        if(((val.trim()).length) == 0){
            return "Please enter your password" 
        }
        return null;
    }

    return(
    <div>
      <h1 className={title()}>Login</h1>
      <Form
      className="w-full justify-center items-center space-y-4 mt-10"
      validationErrors={error}
      onReset={() => setSubmit(null)}
      onSubmit={(e)=>onSubmit(e)}
    >
      <div className="flex flex-col gap-4 max-w-md">

            <Input
                  isRequired
                  label="Username"
                  labelPlacement="outside"
                  name="username"
                  value={username}
                onValueChange={setUsername}
                validate={(value)=>{
                    if(value.length < 3)return "Username must be at least 3 characters long";
                    if((value.split('')).some(val => val === ' ')) return "Can not have spaces"
                }}
                  placeholder="Enter your username"
                />

        <Input
          isRequired
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="text"
          value={password}
          validate={(value)=>{
            if(value.length < 3)return "password must be at least 3 characters long";
            if((value.split('')).some(val => val === ' ')) return "Can not have spaces"
            }}
          onValueChange={setPassword}
        />

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Login
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
        <p>Do not have an account? <Link href="/register"> <span className="text-sky-500 hover:cursor-pointer">Register</span></Link>
        </p>
      </div>

      {submit && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submit, null, 2)}</pre>
        </div>
      )}
    </Form>
    </div>
    )
}
