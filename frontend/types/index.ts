import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface profilePicClickOutside {
  state: boolean;
  buttonRefernce: React.RefObject<HTMLDivElement>;
}

export interface DATASOURCES {
  id: number;
  name: string;
  URL: string;
  image: string;
}

export interface error {
  name?: string;
  username?: string;
  password?: string;
  terms?: string;
  [key: string]: any | null;
}

export interface featuredArticlesData {
  id?: number;
  Title?: string;
  Track?: number;
  Description?: string;
  [key: string]: any;
}

export interface ListOfDates {
  date: number;
  isCurrentMonth: boolean;
  [key: string | number]: any;
}

export interface MapStyle {
  width: number | string;
  height: number | string;
  [key: string]: any;
}

export interface MAPPOSITION {
  lat: number | string;
  long: number | string;
  [key: string]: any;
}
