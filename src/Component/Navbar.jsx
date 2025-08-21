import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom'

function Navbar({location,getLocation,openDropDown,setOpenDropDown}) {
    
    const toggleDD = ()=>{
        setOpenDropDown(!openDropDown);
    }
    return (
        <div className='p-2 mb-1'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                <div className='flex gap-7 items-center'>
                    <div>
                        <Link to={"/"}><h1 className='font-bold text-3xl'><span className='font-semibold text-blue-500 font-serif'>B</span>uyKart</h1></Link>
                    </div>
                    <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
                        <MapPin className='text-red-500' />
                        <span className='font-semibold'>{location ? <div>
                            <p>{location.county}</p>
                            <p>{location.state}</p>
                        </div> : "Add Address"}</span>
                        <FaCaretDown onClick={toggleDD}/>
                    </div>
                    {
                        openDropDown ? 
                        <div className='w-[250px] h-max p-5 border-2 shadow-2xl rounded-md   z-50 border-gray-500 top-16 left-60 fixed'>
                            <h1 className='text-xl mb-4 flex justify-center items-center gap-2'>Detect my Location <span onClick={toggleDD} className='cursor-pointer'><RxCross1 /></span></h1>
                            <button className='px-3 py-1 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-400 active:scale-95' onClick={getLocation}>Allow</button>
                        </div> : null
                    }
                </div>
                <nav className='flex gap-7 items-center'>
                    <ul className='flex gap-7 text-xl font-semibold'>
                        <NavLink to={"/"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"}`}><li>Home</li></NavLink>
                        <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"}`}><li>Products</li></NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"}`}><li>About</li></NavLink>
                        <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"}`}><li>Contacts</li></NavLink>
                    </ul>
                    <Link className='relative' to={"/cart"}>
                        <FaCartShopping className='h-7 w-7' />
                        <span className='absolute -top-2 -right-5 text-white bg-red-500 rounded-full px-2'>0</span>
                    </Link>
                    <div className='ml-5'>
                        <SignedOut>
                            <SignInButton className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer active:scale-95 hover:bg-red-400' />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
