import Image from 'next/image'
import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'
import DownloadIcon from './DownloadIcon'
import heropic from "/public/images/profile/my-image.png"
import Hireme from './Hireme'
import Button from './ui/Button'
import { AuroraBackground } from './ui/AuroraBackground'
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-0   home-height py-auto">
        <div className='absolute top-0 right-0 -z-10 w-full opacity-50 transform -scale-x-100'>
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
            </motion.div>
          </AuroraBackground>
        </div>

        <Hireme/>

        <div className="h-[370px] overflow-hidden sm:h-[450px] rounded-2xl">
          <Image src={heropic} alt="adibmannan" className="w-full sm:h-full sm:w-auto"/>

        </div>

        <div className="sm:w-1/2 sm:h-[450px] flex flex-col justify-between">
          <TextGenerateEffect words="Turn Your Idea Into Reality With Code And Colors." className="text-4xl xl:text-6xl font-extrabold -mt-3"/>
          <p className="mt-6 sm:mt-0 text-lg md:text-xl font-medium">
          As a skilled frontend developer, I work on helping businesses turn their vision into innovative web applications. Applications that are appealing to users. Feel free to talk with me about your project or problems related to web development.
          </p>
          <div className="flex items-center self-start gap-7">

          <Link href="/resume.pdf" target="_blank" download={true}>
            <Button title='Resume' position='right' icon={<DownloadIcon color="#f5f5f5"/>}/>
          </Link>

          <a className="flex items-center text-slate-500 rounded py-2.5 px-6 font-bold uppercase tracking-[2px] hover:bg-dark hover:text-light transition ease-in-out border border-slate-800" href="#about" >About me</a>

          </div>
          

        </div>
      </div>
  )
}

export default Hero