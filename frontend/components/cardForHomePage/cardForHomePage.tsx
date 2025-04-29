"use client"
import React from "react";
import {Card, CardFooter, CardHeader, CardBody} from "@heroui/card";
import Image from "next/image";
import {featuredArticlesData} from '@/types'
import { motion } from "framer-motion";

const CardForHomePage = ({id,Title,Track,Description}:featuredArticlesData)=>{
    return(
        <motion.div
        whileHover={{
            scale: 1.07,
            transition: { type: "spring", stiffness: 500 },
          }}
          className="w-64">
        <Card className="py-4 hover:cursor-pointer">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{Title}</p>
        <small className="text-default-500">{Track}</small>
        <h4 className="font-bold text-large">{Description}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
    </motion.div>
    )
}

export default CardForHomePage;