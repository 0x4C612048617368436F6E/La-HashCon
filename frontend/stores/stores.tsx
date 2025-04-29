import {create} from 'zustand'
import {error} from '@/types/index'

const loginErr:error = {} 
const registerErr:error = {}

const store = (set:any)=>({
    //Below is for profile
    showSubDivWhenProfileClicked: false,

    setshowSubDivWhenProfileClicked:()=>set((state:any)=>({showSubDivWhenProfileClicked:!state.showSubDivWhenProfileClicked})),
    //Above is for profile

    //Below is for login firstname
    loginFirstname:'',

    setLoginFirstName:(val:string)=>set((state:any)=>({loginfirstname: val})),
    //Above is for login firstname

    //Below is for login lastname
    loginLastname:'',

    setLoginLastName:(val:string)=>set((state:any)=>({loginLastname: val})),
    //Above is for login lastname

    //Below is for login password
    loginPassword:'',

    setLoginPassword:(val:string)=>set((state:any)=>({loginPassword: val})),
    //Above is for login password

    //Below is for login userName
    loginUserName:'',

    setLoginUserName:(val:string)=>set((state:any)=>({loginUserName: val})),
    //Above is for login userName

    //Below is for login email
    loginEmail:'',

    setLoginEmail:(val:string)=>set((state:any)=>({loginEmail: val})),
    //Above is for login email

    //Below is for login submit
    loginSubmit:null,

    setLoginSubmit:(val:string | null)=>set((state:any)=>({loginSubmit: val})),
    //Above is for login submit

    //Below is for login error
    loginError:loginErr,

    setLoginError:(val:any)=>set((state:any)=>({
        loginError:val
    })),
    //Above is for login error







    //Register stuff

    //Below is for register firstname
    registerFirstname:'',

    setRegisterFirstName:(val:string)=>set((state:any)=>({registerFirstname: val})),
    //Above is for register firstname

    //Below is for register lastname
    registerLastname:'',

    setRegisterLastName:(val:string)=>set((state:any)=>({registerLastname: val})),
    //Above is for register lastname

    //Below is for register password
    registerPassword:'',

    setRegisterPassword:(val:string)=>set((state:any)=>({registerPassword: val})),
    //Above is for register password

    //Below is for register Confirm password
    registerConfirmPassword:'',

    setRegisterConfirmPassword:(val:string)=>set((state:any)=>({registerConfirmPassword: val})),
    //Above is for register password

    //Below is for register userName
    registerUserName:'',

    setRegisterUserName:(val:string)=>set((state:any)=>({registerUserName: val})),
    //Above is for register userName

    //Below is for register email
    registerEmail:'',

    setRegisterEmail:(val:string)=>set((state:any)=>({registerEmail: val})),
    //Above is for register email

    //Below is for register submit
    registerSubmit:null,

    setRegisterSubmit:(val:string | null)=>set((state:any)=>({registerSubmit: val})),
    //Above is for register submit

    //Below is for register error
    registerError:registerErr,

    setRegisterError:(val:any)=>set((state:any)=>({
        registerError:val
    })),
    //Above is for register error

    termsAndConditions:false,

    setTermsAndConditions:()=>set((state:any)=>({
        termsAndConditions:!state.termsAndConditions
    }))
})

const useStore = create(store);

export default useStore;