import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import DataSourceSlider from "@/components/carousel/carousel";

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
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          Login
        </Link>
      </div>
          <div className="h-30 w-1">

          </div>
      <section className="mt-20">
          <h1 className="font-bold text-2xl">Stay Updated with the latest tech news</h1>
      </section>
          <p className="text-lg">Discover the latest in technology — fresh updates from trusted sources like BBC, TechCrunch, and beyond. Stay informed with La HashCon!</p>


      <section className="mt-20">
        <h1 className="font-bold text-2xl">Featured Articles</h1>
      </section>

      <section className="mt-20">
        <h1 className="font-bold text-2xl">Latest News</h1>
      </section>

      <section className="mt-20">
        <h1 className="font-bold text-2xl">Popular Sources</h1>
      </section>
      <DataSourceSlider />

      <section className="mt-20">
        <h1 className="font-bold text-2xl">Newsletter/Join the Community</h1>
      </section>

      <section className="mt-20">
        <h1 className="font-bold text-2xl">About La HashCon</h1>
      </section>

      <section className="mt-20">
        <h1 className="font-bold text-2xl">Upcoming Events</h1>
      </section>
    </section>
  );
}
