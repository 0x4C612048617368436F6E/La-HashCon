import React, { ReactNode } from "react";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {NavbarMenuItem} from "@heroui/navbar";
import { useTheme } from "next-themes";
import { profilePicClickOutside } from "@/types";
import useStore from "@/stores/stores";
import { profile } from "console";

//the state parameter is to check if the profile pic is open
const ProfilePicSubPart = ({state,buttonRefernce}:profilePicClickOutside)=>{
  const {theme} = useTheme();
  const profilePic = useRef<HTMLDivElement>(null);
  const setshowSubDivWhenProfileClicked:any = useStore((store)=>store.setshowSubDivWhenProfileClicked)
  console.log("True:",state)

  useEffect(()=>{
    const checkForClickOutsideElement = (e:MouseEvent)=>{
      const target = e.target as HTMLDivElement;
      if(!profilePic.current?.contains(target)){
        setshowSubDivWhenProfileClicked();
      }
      if(buttonRefernce.current?.contains(target)) return;
    }

    if(state){
      console.log("True: ",state)
      document.addEventListener('click',checkForClickOutsideElement);
    }
    else{
      console.log("False:",state);
    }

    return ()=>{
      document.removeEventListener('click',checkForClickOutsideElement);
    }
  },[state])
  

  const bgClass =
    theme === "dark"
      ? "bg-zinc-800 text-white divide-gray-700"
      : "bg-white text-black divide-gray-100";

    return(
        <div ref={profilePic} className={`absolute right-0 z-10 mt-1 top-100 w-56 p-5 origin-top-right rounded-sm shadow-lg focus:outline-hidden shadow-xl/30 hidden sm:block gap-2 ${bgClass}`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
        >
        
        {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="list-none mb-5">
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </div>
    )
}

export {ProfilePicSubPart};