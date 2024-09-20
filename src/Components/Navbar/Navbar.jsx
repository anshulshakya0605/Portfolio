import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
            <div className="max-w-7xl mx-auto shadow-lg px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex flex-shrink-0 space-x-2">
                        <img className="h-14 w-14 rounded-full border-yellow-500 border-2" src={logo} alt="Logo" />
                        <h1 className='text-3xl font-semibold text-center cursor-pointer'>Anshul Kumar
                            <p className='text-sm text-yellow-500'>Front End Developer</p>
                        </h1>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                            <NavLink to="/" className={({isActive}) => `${isActive ? 'text-yellow-500' : 'text-gray-300'} hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium`}>Home</NavLink>
                            <NavLink to="/about" className={({isActive}) => `${isActive ? 'text-yellow-500' : 'text-gray-300'} hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium`}>About</NavLink>
                            <NavLink to="/skills" className={({isActive}) => `${isActive ? 'text-yellow-500' : 'text-gray-300'} hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium`}>Skills</NavLink>
                            <NavLink to="/contact" className={({isActive}) => `${isActive ? 'text-yellow-500' : 'text-gray-300'} hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium`}>Contact</NavLink>
                            <a href="https://drive.google.com/file/d/1Ib4MJrcXg1VCq8cLjAKUCMJRP50ctFTX/view?usp=drive_link" download="AnshulKumarResume.pdf" target='_blank' className=" text-gray-300 hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Resume</a>
                        </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <NavLink to='/' className={({isActive}) => `${isActive ? 'text-yellow-500' : 'text-gray-300'} hover:bg-gray-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium`}>Home</NavLink>
                    <NavLink to='/about' className={({isActive}) => `${isActive ? 'text-yellow-500' : 'text-gray-300'} hover:bg-gray-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium`}>About</NavLink>
                    <NavLink to='/services' className={({isActive}) => `${isActive ? 'text-yellow-500' : 'text-gray-300'} hover:bg-gray-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium`}>Services</NavLink>
                    <NavLink to='/contact' className={({isActive}) => `${isActive ? 'text-yellow-500' : 'text-gray-300'} hover:bg-gray-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium`}>Contact</NavLink>
                    <a href='https://drive.google.com/file/d/1Ib4MJrcXg1VCq8cLjAKUCMJRP50ctFTX/view?usp=drive_link' download="AnshulKumarResume.pdf" target='_blank' className= "text-gray-300 hover:bg-gray-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">Resume</a>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
