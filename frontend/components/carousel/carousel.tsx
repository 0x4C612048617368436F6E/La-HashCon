"use client"
import DataSources from "@/values/sources";
import Image from "next/image";
import {Card, CardFooter} from "@heroui/card";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import TheVergeImageSVG from "../theVergeLogo";
import ArsTechnica from "../arsTechnica";

const DataSourceSlider = ()=>{
    return(
        
        <div className="flex justify-center">
            {DataSources.map((item)=>
            <Card key={item.id} className="p-4 m-5 hidden md:block">
            <Link isExternal key={item.id} href={item.URL}>
            {item.id === 4 ? <TheVergeImageSVG key={item.id}/> : item.id === 5 ? <ArsTechnica key={item.id}/> : <Image key={item.id} src={item.image} alt={item.name} width={64} height={64} className="hover:cursor-pointer"/>}
            </Link>
            </Card>
            )}

        </div>
    )
}

export default DataSourceSlider;