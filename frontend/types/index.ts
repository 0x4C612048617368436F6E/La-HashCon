import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface profilePicClickOutside{
  state:boolean;
  buttonRefernce:React.RefObject<HTMLDivElement>;
}

export interface DATASOURCES{
  id:number
  name:string
  URL:string
  image:string
}