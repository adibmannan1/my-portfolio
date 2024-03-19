import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
    
    const navItems: {name: string, link: string}[] = [
                        {name:'Home', link:'/'}, 
                        {name:'Projects', link:'/projects'},
                        {name:'About Me', link:'/about'},
                        {name:'Blogs', link:'/blogs'}
                    ]
    const socials = [
                        {logo:'Github', link:'https://github.com/adibmannan1'}, 
                        {logo:'Youtube', link:'https://www.youtube.com/'},
                        {logo:'Facebook', link:'https://www.facebook.com/adibmannan2/'},
                        {logo:'Instagram', link:'https://www.instagram.com/adib_mannan_/s'}
                    ]
  return (
    <header className='w-full px-10 sm:px-20 lg:px-32 py-8 font-semibold flex items-center justify-between relative nav-text'>
        <nav>
            {navItems.map((item, index) => (
                <Link href={item.link} key={item.name} className={`${index===(navItems.length - 1)? 'mr-0' : 'mr-4'}`}>{item.name}</Link>
            ))}
        </nav>
        <div className='absolute left-1/2 top-4 -translate-x-1/2'><Logo/></div>
        <nav>
        {socials.map((item, index) => (
            <Link href={item.link} target='_blank' key={index}>{item.logo}</Link>
            ))}
        </nav>
    </header>
  )
}

export default Navbar