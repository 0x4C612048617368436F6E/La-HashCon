import React from "react";
import TermsAnsConditionsComponent from "@/components/termsAndConditions/termsAndConditions";
import { title } from "@/components/primitives";

const TermsAndConditions = ()=>{
    return(
        <div>
              <h1 className={title()}>Terms and Conditions</h1>
              <TermsAnsConditionsComponent />
        </div>
    )
}

export default TermsAndConditions;