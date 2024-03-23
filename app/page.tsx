"use client"
import Image from "next/image";
import profilepic from "/public/images/profile/my-image.png"
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import DownloadIcon from "./components/DownloadIcon";

export default function Home() {

  return (
    <main className="text-dark px-5 sm:px-10 md:px-20 lg:px-32 w-full sm:h-screen
    flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-0 mt-32 sm:mt-12 lg:mt-10">

        <div className="h-[370px] overflow-hidden sm:h-[450px] rounded-2xl">
          <Image src={profilepic} alt="adibmannan" className="w-full sm:h-full sm:w-auto"/>

        </div>

        <div className="sm:w-1/2 sm:h-[450px] flex flex-col justify-between">
          <AnimatedText text="Turn Your Idea Into Reality With Code And Colors." className="text-4xl xl:text-6xl font-extrabold -mt-3"/>
          <p className="mt-6 sm:mt-0 text-lg md:text-xl font-medium">
          As a skilled frontend developer, I work on helping businesses turn their vision into innovative web applications. Applications that are appealing to users. Feel free to talk with me about your project or problems related to web development.
          </p>
          <div className="flex items-center self-start gap-7">
            <Link className="flex items-center gap-3 bg-dark text-light rounded py-3 px-6 font-bold uppercase tracking-[2px] hover:bg-gray-500 transition ease-in-out" href="/resume.pdf" target="_blank" download={true}>
              <h1>Resume</h1>
              <DownloadIcon color="#f5f5f5"/>
            </Link>
            <Link className="flex items-center text-dark rounded py-2.5 px-6 font-bold uppercase tracking-[2px] border-[3px] border-dark hover:bg-dark hover:text-light transition ease-in-out" href="mailto:adibmannan1@gmail.com" target="_blank" onClick={(e) => {
              alert("If this did not open gmail, install Mailto extension or  please manually email me at adibmannan1@gmail.com")
              }}>Mail Me</Link>
          </div>

        </div>
      </div>
    </main>
  );
}
