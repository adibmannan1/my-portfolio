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
        <button className={`inline-flex h-12 gap-3 font-bold uppercase tracking-[2px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000422,45%,#0f143c,55%,#000422)] bg-[length:200%_100%] px-6 text-light transition-colors focus:outline-none ${otherClasses}`}>
          {position === "left" && icon}
                <h1 className='pt-[2px]'>{title}</h1>
                 {position === "right" && icon}
        </button>
  
        // <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        // <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        // <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        // {position === "left" && icon}
        //         <h1 className='pt-[2px]'>{title}</h1>
        //         {position === "right" && icon}
        // </span>
      // </button>
  )
}

export default Button