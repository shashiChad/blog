import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        {
            path:"/",
            link:"Home"
        },
        {
            path:"/about",
            link:"About"
        },
        {
            path:"/contact",
            link:"Contact"
        },
        {
            path:"/experience",
            link:"Experience"
        },
        {
            path:"/blog",
            link:"Blog"
        }
    ]
  return (
   <header className='bg-black text-white top-0 left-0 right-0'>
    <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-xl font-bold text-white'>Shashi<span className='text-green-400'>Blog</span></a>
        <ul className='md:flex gap-12 text-lg hidden'>
            {
                navItems.map(({path, link}) => <li className='text-white' key={path}>
                    <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                    to={path}>{link}</NavLink>
                </li>)
            }
        </ul>
        <div className='text-white'>
            <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>
              Login
            </button>
        </div>
        
    </nav>
   </header>
  )
}

export default Navbar
