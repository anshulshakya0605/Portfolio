import React from 'react'
import logo from '../../assets/logo.png'
import { IoLogoCss3, IoLogoFacebook, IoLogoGithub, IoLogoHtml5, IoLogoJavascript, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { ReactTyped, Typed } from 'react-typed'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Skill from '../Skills/Skill'
import Testimonial from '../Testimonials/Testimonial'
function Home() {
    return (
        <>
            <div className="max-w-screen-2xl container px-4 md:px-20 my-10">
                <div className="flex flex-col md:flex-row">
                    <div className='md:w-1/2 mt-12 md:mt-12 space-y-2 order-2 md:order-1'>
                        <span>Welcome In My Portfolio</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello I'm a </h1>
                            <ReactTyped
                                className='text-yellow-500 font-bold'
                                strings={["Developer", "Programer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                            {/* <span className='text-yellow-500 font-bold'>Developer</span> */}
                        </div>
                        <p className='leading-8'>As a dedicated Front Developer, I bring a blend of artistic
                            vision and technical expertise to create stunning and
                            functional online experiences. With a keen eye on design
                            trends and a commitment to user-centric solutions, I create
                            websites that not only look visually appealing but also
                            provide seamless navigation and optimal user experience.
                        </p>
                        <br />
                        <div className='flex justify-between'>
                            <div className='space-y-2 text-center'>
                                <h2>Available On</h2>
                                <div className='flex space-x-2 text-3xl rounded-full'>
                                    <a href="https://github.com/anshulshakya0605" target='_blank'><IoLogoGithub /></a>
                                    <a href="https://www.linkedin.com/in/anshul-kumar-b0536b250/" target='_blank'><IoLogoLinkedin /></a>
                                    <a href=""><IoLogoFacebook /></a>
                                    <a href="https://wa.me/917300880255/?text=Hii" target='_blank'><IoLogoWhatsapp /></a>
                                </div>
                            </div>
                            <div className='space-y-2 text-center'>
                                <h2>Currently Working On</h2>
                                <div className='flex space-x-2 text-3xl rounded-full'>
                                    <IoLogoHtml5 className='hover:scale-110 duration-200 cursor-pointer' />
                                    <IoLogoCss3 className='hover:scale-110 duration-200 cursor-pointer' />
                                    <IoLogoJavascript className='hover:scale-110 duration-200 cursor-pointer' />
                                    <IoLogoReact className='hover:scale-110 duration-200 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 mt-12 md:mt-10 space-y-2 md:ps-8 order-1'>
                        <img src={logo} className='bg-gray-300 w-72 h-72 ml-7 md:w-[450px] md:h-[450px] rounded-full md:ml-24' alt="" />
                    </div>
                </div>
                <div>
                </div>
            </div>
            <About />
            <Skill/>
            <Testimonial/>
            <Contact/>
        </>
    )
}

export default Home
