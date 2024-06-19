"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const Logo = () => {

  const MotionLink = motion(Link)

  return (
    <div className='flex items-center justify-center mt-1 '>
        <MotionLink href='/' 
        className='w-14 h-14 bg-dark rounded-full text-light flex justify-center items-center text-1xl font-bold hover:scale-[1.05]' 
        whileHover={{
        backgroundColor:["#175369", "#3b4470","#136b5f","#6b0136","#001d7a", "#143642", "#1b1b1b"],
        transition: {duration: 1, repeat: Infinity},
        }}>
          AM
        </MotionLink>
    </div>
  )
}

export default Logo