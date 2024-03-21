"use client"
import React from 'react'
import { motion } from 'framer-motion';

const quote = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.2,
            staggerChildren: 0.05,
        }
    }
}
const words = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {



  return (
    <div className={`w-full mx-auto py-2 flex items-center justify-center ${className}`}>
        <motion.h1 variants={quote} initial="initial" animate="animate">
            {text.split(" ").map((word, index) => (
                <motion.span key={word+'-'+index} variants={words} className='inline-block'>
                    {word}&nbsp;
                </motion.span>
                ))
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText

