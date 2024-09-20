import React from 'react'
import logo1 from '../../assets/logo1.jpeg'
import { ReactTyped } from 'react-typed'

function About() {
    return (
        <>
            <div className='max-w-screen-2xl container px-4 md:px-20 mt-10'>
                <div className='space-y-6'>
                    <h1 className='text-3xl font-bold text-yellow-400 mt-20 text-center hover:scale-100 duration-300 hover:text-white'> About Me </h1>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center p-4 min-h-screen'>
                    <div className='md:w-1/3 w-full'>
                        <img className='rounded-3xl mt-6 shadow-lg' src={logo1} alt="anshul image" />
                    </div>
                    <div className='md:w-2/3 w-full mt-6 md:mt-0 md:ml-10'>
                        <h1 className='text-4xl text-white mt-5 md:ml-10'>ANSHUL <span> <ReactTyped
                            className='text-yellow-400'
                            strings={['SHAKYA', 'KUMAR']}
                            typeSpeed={70}
                            backSpeed={80}
                            loop={true}
                        /> </span></h1>

                        <h2 className='mt-2 text-xl md:text-2xl text-yellow-400 md:ml-10'>Front End Developer</h2>
                        <div className='mt-6'>
                        <p className='text-sm md:px-10 text-justify leading-6'>Welcome to Anshul Kumar Portfolio!
                        As a passionate front-end developer, I specialize in creating dynamic, responsive, and user-friendly web applications. With a deep understanding of HTML, CSS, JavaScript, and modern frameworks like React, I bring ideas to life through clean and efficient code.</p>
                        </div>

                        <ul className="mt-6 space-y-4 md:ml-10">
                            <div className='flex'>
                            <div className='w-1/3 space-y-2'>
                                <li>Education</li>
                                <li>Birthday</li>
                                <li>Contact</li>
                                <li>Email Id</li>
                                <li>Address</li>
                                <li>Language</li>
                            </div>
                            <div className='w-2/3 space-y-2 text-gray-300'>
                                <li>: MCA Pursuing</li>
                                <li>: 06 May 2000</li>
                                <li>: +91-7300880255</li>
                                <li>: anshulshakya0605</li>
                                <li>: Etawah UP (206001)</li>
                                <li>: Hindi / English</li>
                            </div>
                            </div>
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
