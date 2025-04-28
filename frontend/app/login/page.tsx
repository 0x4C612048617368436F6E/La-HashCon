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

export default function LoginPage(){
    //unpack the states
    const username = useStore((store)=>store.loginUserName)
    const setUsername = useStore((store)=>store.setLoginUserName)

    const password = useStore((store)=>store.loginPassword)
    const setPassword = useStore((store)=>store.setLoginPassword)

    const error = useStore((store)=>store.loginError)
    const setError = useStore((store)=>store.setLoginError)

    const submit = useStore((store)=>store.loginSubmit);
    const setSubmit = useStore((store)=>store.setLoginSubmut);
    
    const onSubmit = ()=>{
        console.log("Submitted");
    }

    const getPasswordError = (val:string)=>{
        console.log("Get password Error");
        return null;
    }
    return(
    <div>
      <h1 className={title()}>Login</h1>
      <Form
      className="w-full justify-center items-center space-y-4"
      validationErrors={error}
      onReset={() => setSubmit(null)}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          isRequired
          errorMessage={({validationDetails}) => {
            if (validationDetails.valueMissing) {
              return "Please enter your name";
            }

            return error.name;
          }}
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
        />

        <Input
          isRequired
          errorMessage={({validationDetails}) => {
            if (validationDetails.valueMissing) {
              return "Please enter your email";
            }
            if (validationDetails.typeMismatch) {
              return "Please enter a valid email address";
            }
          }}
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          isRequired
          errorMessage={getPasswordError(password)}
          isInvalid={getPasswordError(password) !== null}
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onValueChange={setPassword}
        />

        <Select
          isRequired
          label="Country"
          labelPlacement="outside"
          name="country"
          placeholder="Select country"
        >
          <SelectItem key="ar">Argentina</SelectItem>
          <SelectItem key="us">United States</SelectItem>
          <SelectItem key="ca">Canada</SelectItem>
          <SelectItem key="uk">United Kingdom</SelectItem>
          <SelectItem key="au">Australia</SelectItem>
        </Select>

        <Checkbox
          isRequired
          classNames={{
            label: "text-small",
          }}
          isInvalid={!!error.terms}
          name="terms"
          validationBehavior="aria"
          value="true"
          onValueChange={() => setError((prev) => ({...prev, terms: undefined}))}
        >
          I agree to the terms and conditions
        </Checkbox>

        {error.terms && <span className="text-danger text-small">"What the FUCK"{error.terms}</span>}

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
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
