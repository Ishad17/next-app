import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Expletus_Sans } from "next/font/google";
import { Cabin_Condensed } from "next/font/google";

const cabinCondensed = Cabin_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cabin-condensed",
});


const cabin = Expletus_Sans({
  subsets: ["latin"],        // required
  weight: ["400", "700"],    // optional: define weights you'll use
  variable: "--font-cabin",  // optional: for Tailwind `font-variable` usage
});

interface HeroProps {
  badge?: string;
  heading?: string;
  line2?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const Hero = ({
  badge = "✨ Your Website Builder",
  heading = "At VSTACK, ",
  line2 = "We code You grow.",
  description = "Committed to offering top tier service and meaningful results, we value the trust you place in us and ensure your investment drives real impact.",
  buttons = {
    primary: {
      text: "Contact Us",
      url: "https://www.vstacksolutions.lk",
    },
    secondary: {
      text: "View our Clients",
      url: "https://www.vstacksolutions.lk",
    },
  },
  image = {
    src: "heroVstack.png",
    alt: "Hero section demo image showing interface components",
  },
}: HeroProps) => {
  return (
    <section className="overflow-hidden bg-gray-900">
      <div className="container m-auto bg-gray-900">
        <div className="grid items-center gap-28 lg:py-30 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )} */}
     
          


            <h1 className={`my-10 text-pretty text-gray-300 text-4xl font-bold lg:text-6xl ${cabin.className}`}>
              {heading} <br/> {line2}
            </h1>
            <p className={`text-muted-foreground mx-10 lg:mx-0 ${cabinCondensed.className} mb-10 max-w-lg lg:text-xl`}>
              {description}
            </p>
            <div className="flex w-9/10 mt-4 flex-col justify-center gap-7 sm:flex-row lg:justify-start">
              
              {buttons.primary && (
                <Button asChild variant="link" className="w-full bg-cyan-800 p-6 text-gray-200 hover: hover:scale-105 sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="secondary" className="w-full hover:scale-105 p-6 hover:bg-cyan-800 hover:text-white sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}


              {/* different button styles */}
             {/* <div className="w-full relative flex justify-center flex-wrap gap-5">
              <button className="relative border border-indigo-600 group  py-1.5 px-2.5 text-indigo-600">
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>Button Hover </button>
              <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
              <span className="relative text-indigo-600 ">Button Hover</span>
              </button>
              <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
              <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">Button Hover</span>
              </button>
              </div> */}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-5/6 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
