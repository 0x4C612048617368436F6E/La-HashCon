import {create} from 'zustand'
import {error} from '@/types/index'

const loginErr:error = {} 

const store = (set:any)=>({
    //Below is for profile
    showSubDivWhenProfileClicked: false,

    setshowSubDivWhenProfileClicked:()=>set((state:any)=>({showSubDivWhenProfileClicked:!state.showSubDivWhenProfileClicked})),
    //Above is for profile

    //Below is for login firstname
    loginFirstname:'',

    setLoginFirstName:(val:string)=>set((state:any)=>({Loginfirstname: val})),
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

    setLoginSubmut:(val:string | null)=>set((state:any)=>({loginSubmit: val})),
    //Above is for login submit

    //Below is for login error
    loginError:loginErr,

    setLoginError:(val:string | ((prev:any)=>any))=>set((state:any)=>({loginError: val}))
    //Above is for login error
})

const useStore = create(store);

export default useStore;