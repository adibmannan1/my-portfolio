"use client"
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import facebook from '/public/icons/facebook.svg'
import instagram from '/public/icons/instagram.svg'
import github from '/public/icons/github.svg'
import youtube from '/public/icons/youtube.svg'
import linkedin from '/public/icons/linkedin.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathName = usePathname()
    console.log(pathName)
    
    const navItems: {name: string, link: string}[] = [
                        {name:'Home', link:'/'}, 
                        {name:'Projects', link:'/projects'},
                        {name:'About Me', link:'/about'},
                        {name:'Blogs', link:'/blogs'}
                    ]
    const socials = [
                        {logo: github, link:'https://github.com/adibmannan1'}, 
                        {logo: youtube, link:'https://www.youtube.com/'},
                        {logo: facebook, link:'https://www.facebook.com/adibmannan2/'},
                        {logo: instagram, link:'https://www.instagram.com/adib_mannan_/s'},
                        {logo: linkedin, link:'https://www.linkedin.com/'}
                    ]
  return (
    <header className='w-full px-10 sm:px-20 lg:px-32 py-8 font-bold flex items-center justify-between nav-text fixed top-0 left-0'>
        <nav>
            {navItems.map((item, index) => (
                <Link href={item.link} key={item.name} 
                className={`${index===(navItems.length - 1)? 'mr-0' : 'mr-4'} transition duration-500 ease-in-out relative group rounded px-3 py-2 ${pathName === item.link ? 'bg-gray-300' : ''}`}>
                    {item.name}
                    
                    <span className='h-[3px] w-0 bg-dark inline-block absolute left-0 -bottom-1 group-hover:w-full transition-[width] duration-500 custom-transition'>&nbsp;</span>
                </Link>
            ))}
        </nav>
        <div className='absolute left-1/2 top-4 -translate-x-1/2'><Logo/></div>
        <nav className='flex gap-5 items-center'>
        {socials.map((item, index) => (
            <Link href={item.link} target='_blank' key={index} className='hover:translate-y-[-3px] transition duration-200 ease-in-out'>
                <Image src={item.logo} alt='logo' width={26} height={26}/>
            </Link>
            ))}
        </nav>
    </header>
  )
}

export default Navbar