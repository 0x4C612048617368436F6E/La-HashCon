"use client"
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Typewriter from 'typewriter-effect';
import { Component } from "react";

import DataSourceSlider from "@/components/carousel/carousel";

import Footer from "@/components/footer/footer";

import FeaturedArticlesData from "@/services/featuredArticlesData/featuredArticlesData";

import CardForHomePage from "@/components/cardForHomePage/cardForHomePage";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

      <div className="inline-block max-w-xl text-center justify-center">

        <span className={title()}>Your&nbsp;</span>
        <span className={title()}>Daily&nbsp;</span>
        <br />
        <span className={title()}>
          Dose Of Tech, Trends and Tomorrow All In One Place.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Stay In Sync With The World Of Tech.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/news"
        >
          Start Exploring
        </Link>
        <Link
          
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/login"
        >
          Login
        </Link>
      </div>
          <div className="h-30 w-1">

          </div>
      <section className="mt-20 mb-5">
          <h1 className="font-bold text-2xl font-Bebas_Neue tracking-[.25em]">Stay Updated with the latest tech news</h1>
      </section>
      <section>

          <p className="text-lg text-justify font-Bebas_Neue tracking-wide">
          <span className="font-bold sm:text-4xl text-lg text-sky-500 font-Bebas_Neue">
        <Typewriter
          options={{
            strings: ["Are you a Tech Enthusiast?"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
          }}
        />

          </span>
          Then discover the latest in technology — fresh updates from trusted and reliable sources like BBC, TechCrunch, and beyond. Stay informed with La HashCon!
          </p>

          </section>


      <section className="mt-20">
        <h1 className="font-bold text-2xl font-Bebas_Neue tracking-[.25em]">Featured Articles</h1>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FeaturedArticlesData.map((val)=><CardForHomePage key={val.id} id={val.id} Title={val.Title} Track={val.Track} Description={val.Description}/>)}
        </div>

      <section className="mt-20">
        <h1 className="font-bold text-2xl font-Bebas_Neue tracking-[.25em]">Latest News</h1>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FeaturedArticlesData.map((val)=><CardForHomePage key={val.id} id={val.id} Title={val.Title} Track={val.Track} Description={val.Description}/>)}
        </div>

      <section className="mt-20">
        <h1 className="font-bold text-2xl font-Bebas_Neue tracking-[.25em]">Popular Sources</h1>
      </section>
      <DataSourceSlider />
      <p className="font-Bebas_Neue text-lg">We have made sure that information are taken accurate andd reliable source</p>

      <section className="mt-20 mb-5">
        <h1 className="font-bold text-2xl font-Bebas_Neue tracking-[.25em]">Join the Community</h1>
      </section>
      <Link href="/news">
        <MdEmail size={128} className="text-blue-700 hover:cursor-pointer"/>
      </Link>    
      <section>
        <p className="text-lg text-justify font-Bebas_Neue">
         Join our community and be the first to receive exclusive offers, insider updates, and special content — straight to your inbox!
          </p>
      </section>

      <section className="mt-20">
        <h1 className="font-bold text-2xl font-Bebas_Neue tracking-[.25em]">About La HashCon</h1>
      </section>
      <p className="text-lg text-justify font-Bebas_Neue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <section className="mt-20">
        <h1 className="font-bold text-2xl font-Bebas_Neue tracking-[.25em]">Upcoming Events</h1>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FeaturedArticlesData.map((val)=><CardForHomePage key={val.id} id={val.id} Title={val.Title} Track={val.Track} Description={val.Description}/>)}
        </div>

      <Footer />
    </section>
  );
}
