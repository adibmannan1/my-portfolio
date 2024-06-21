import Link from 'next/link'
import React from 'react'
import DownloadIcon from '../DownloadIcon'

const Button = ({title, icon, position, handleClick, otherClasses}:{
  title: string
  icon?: React.ReactNode
  position?: string
  handleClick?: () => void
  otherClasses?: string
}) => {
  return (
        <button className={`inline-flex h-12 gap-3 font-bold uppercase tracking-[2px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#1b1b1b,45%,#303030,55%,#1b1b1b)] bg-[length:200%_100%] px-6 text-light transition-colors focus:outline-none ${otherClasses}`}>
          {position === "left" && icon}
          <h1 className='pt-[2px]'>{title}</h1>
          {position === "right" && icon}
        </button>
  
      
  )
}

export default Button