"use client"

import { title } from "@/components/primitives";
import React from "react";
import { useRef } from "react";
import {Form} from "@heroui/form";
import { Input } from "@heroui/input";
import { Select } from "@heroui/select";
import { SelectItem } from "@heroui/select";
import {Checkbox} from "@heroui/checkbox";
import { Button } from "@heroui/button";
import useStore from "@/stores/stores";
import { ValidationError } from "@react-types/shared";
import Link from "next/link";
import CountryList from "@/values/countries";

export default function LoginPage(){
    //unpack the states
    const firstName = useStore((store)=>store.registerFirstname)
    const setFirstName = useStore((store)=>store.setRegisterFirstName)

    const lastName = useStore((store)=>store.registerLastname)
    const setLastName = useStore((store)=>store.setRegisterLastName)

    const username = useStore((store)=>store.registerUserName)
    const setUsername = useStore((store)=>store.setRegisterUserName)

    const password = useStore((store)=>store.registerPassword)
    const setPassword = useStore((store)=>store.setRegisterPassword)

    const confirmPassword = useStore((store)=>store.registerConfirmPassword)
    const setConfirmPassword = useStore((store)=>store.setRegisterConfirmPassword)

    const email = useStore((store)=>store.registerEmail)
    const setEmail = useStore((store)=>store.setRegisterEmail)

    const error = useStore((store)=>store.registerError)
    const setError = useStore((store)=>store.setRegisterError)

    const submit = useStore((store)=>store.registerSubmit);
    const setSubmit = useStore((store)=>store.setRegisterSubmit);

    const termsAndConditions = useStore((store)=>store.termsAndConditions);
    const setTermsAndConditions = useStore((store)=>store.setTermsAndConditions);

    const paragraph = useRef<HTMLParagraphElement>(null);
    
    const onSubmit = (e:any)=>{
        e.preventDefault();
        if(!termsAndConditions){
          console.log(termsAndConditions)
          console.log("Please read terms and conditions");
          if(paragraph.current){
            paragraph.current.textContent = "Please read terms and conditions";
          }
          return
        }else{
          if(paragraph.current){
            paragraph.current.textContent = "";
          }
          console.log("Cool")
        }
        console.log(firstName)
    }

    const checkBoxHandler = ()=>{
      setTermsAndConditions();
    }

    return(
    <div>
      <h1 className={title()}>Register</h1>
      <Form
      className="w-full justify-center items-center space-y-4 mt-10"
      validationErrors={error}
      onReset={() => setSubmit(null)}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 max-w-md">
            
      <Input
          isRequired
          label="Firstname"
          labelPlacement="outside"
          name="Firstname"
          value={firstName}
          onValueChange={setFirstName}
          validate={(value)=>{
            if(value.length < 3) return "Username must be at least 3 characters long";
            if((value.split('')).some(val => val === ' ')) return "Can not have spaces"
        }}
          placeholder="Enter your firstname"
          />

            <Input
                isRequired
                label="Lastname"
                labelPlacement="outside"
                name="Lastname"
                value={lastName}
                onValueChange={setLastName}
                validate={(value)=>{
                  if(value.length < 3)return "Lastname must be at least 3 characters long";
                  if((value.split('')).some(val => val === ' ')) return "Lastname can not have spaces"
                }}
                placeholder="Enter your lastname"
                />


          <Input
            isRequired
            label="Username"
            labelPlacement="outside"
            name="username"
            value={username}
            onValueChange={setUsername}
            validate={(value)=>{
              if(value.length < 3)return "Username must be at least 3 characters long";
              if((value.split('')).some(val => val === ' ')) return "Username can not have spaces"
            }}
            placeholder="Enter your username"
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
          value={email}
          onValueChange={setEmail}
          placeholder="Enter your email"
          type="email"
        />

        <Input
          isRequired
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          validate={(value)=>{
            if(value.length < 3)return "Password must be at least 3 characters long";
            if((value.split('')).some(val => val === ' ')) return "Password can not have spaces"
          }}
          onValueChange={setPassword}
        />

        <Input
          isRequired
          label="Confirm Password"
          labelPlacement="outside"
          name="Confirm password"
          placeholder="Enter your password"
          type="password"
          value={confirmPassword}
          onValueChange={setConfirmPassword}
          validate={(value)=>{
            if(value.length < 3)return "Password must be at least 3 characters long";
            if((value.split('')).some(val => val === ' ')) return "Password can not have spaces"
          }}
          />

        <Select
          isRequired
          label="Country"
          labelPlacement="outside"
          name="country"
          placeholder="Select country"
        >
          
          {CountryList.map((value)=><SelectItem key={value.code}>{value.name}</SelectItem>)}
          
        </Select>

          <div className="flex">

          <Checkbox
          isRequired
          classNames={{
            label: "text-small",
            
          }}
          isInvalid={!!error.terms}
          name="terms"
          validationBehavior="aria"
          
          onValueChange={()=>checkBoxHandler()}
        ></Checkbox>

          <p className="inline">I agree to the <Link href="/termsAndConditions"> <span className="text-sky-500 hover:cursor-pointer">terms and conditions</span></Link>
          </p>

          </div>
          <p className="text-red-600" ref={paragraph}></p>

        {error.terms && <span className="text-danger text-small">{error.terms}</span>}

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Register
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
