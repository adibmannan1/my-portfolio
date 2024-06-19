import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-dark font-medium text-lg px-5 sm:px-10 md:px-20 lg:px-32'>
        <div className='py-5 flex items-center justify-between'>
          <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
          <div className='flex items-center'>
            Build With <span className='text-red-500 text-2xl px-1'>&#9825;</span>
            <Link href="/" className='font-semibold underline'>Adib Mannan</Link>
          </div>
          <Link href="/">Have A Chat</Link>
        </div>
    </footer>
  )
}

export default Footer