import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import Image from "next/image";

const Footer = ()=>{
        const iconsTab = [
            { icon: <FaFacebookF /> },
            { icon: <AiOutlineTwitter /> },
            { icon: <AiFillYoutube /> },
            { icon: <BiLogoPinterestAlt /> },
          ];
          return (
            <>
              <footer>
                <div className="container mx-auto">
                  {/* footer div all */}
                  <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
                    {/* logo side */}
                    <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
                      
                      <Image src="/LaHashConLogo.png" alt="Logo" width={288} height={288}/>
                      <p className="text-[15px] font-medium text-[#646464]">
                        Take your health and body to the next level with our
                        comprehensive program designed to help you reach your fitness
                        goals.
                      </p>
                      {/* socials */}
                      <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                        {iconsTab.map(({ icon }, index) => {
                          return (
                            <div
                              key={index}
                              className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                              style={{ transition: "all 0.3s" }}
                            >
                              {icon}
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[16px] font-medium text-[#646464]">
                        Privacy Policy | © {new Date().getFullYear()} La HashCon <br />{" "}
                      </p>
                    </div>
        
                    {/* middle div */}
                    <div className="flex flex-col gap-8 relative">
                      <p className="text-[22px] font-bold footer-main">La HashCon</p>
        
                      <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
        
                      <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                      La HashCon
                      </p>
                      <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                      La HashCon
                      </p>
                      <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                      La HashCon
                      </p>
                      <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                      La HashCon
                      </p>
                      <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                      La HashCon
                      </p>
                    </div>
        
                    {/* right div */}
                    <div className="flex flex-col gap-8 relative">
                      <p className="text-[22px] font-bold footer-main">La HashCon</p>
        
                      <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
        
                      <p className="text-[16px]  text-[#646464] font-bold">
                        Monday - Friday:
                      </p>
                      <p className="text-[16px] text-[#646464] font-medium">
                        7:00am - 21:00pm
                      </p>
                      <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
                      <p className="text-[16px] text-[#646464] font-medium">
                        7:00am - 19:00pm
                      </p>
                      <p className="text-[16px] text-[#646464] font-bold ">
                        Sunday - Closed
                      </p>
                    </div>
        
                    {/* middle div */}
                    <span></span>
                  </div>
                </div>
              </footer>
            </>
          );
}

export default Footer;