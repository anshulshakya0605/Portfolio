import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import bootstrap from '../../assets/bootstrap.png'
import reactLogo from '../../assets/react.png'
import reduxLogo from '../../assets/redux.png'
import tailwindLogo from '../../assets/tailwindLogo.png'
import photoshopLogo from '../../assets/photoshopLogo.png'
function Skill() {
    return (
        <>
            <div className="container mt-16">
                <h1 className='text-yellow-400 text-3xl font-bold hover:text-white text-center duration-300'>My Skills</h1>
                <div className="text-white py-8">
                    <div className="text-center mb-8">
                        <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-10">

                        <div className="text-center">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img src={html} alt="Html" className="mx-auto bg-white rounded-full mb-4 w-40 h-40 hover:scale-110 duration-200 cursor-pointer" />
                                <p className="text-3xl font-bold">92%</p>
                            </div>
                            <p className="mt-4 text-2xl text-yellow-400">HTML</p>
                        </div>


                        <div className="text-center">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img src={css} alt="Css" className="mx-auto bg-white rounded-full mb-4 w-40 h-40 hover:scale-110 duration-200 cursor-pointer" />
                                <p className="text-3xl font-bold">80%</p>
                            </div>
                            <p className="mt-4 text-2xl text-yellow-400">CSS</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img src={js} alt="Js" className="mx-auto bg-white rounded-full mb-4 w-40 h-40 hover:scale-110 duration-200 cursor-pointer" />
                                <p className="text-3xl font-bold">85%</p>
                            </div>
                            <p className="mt-4 text-2xl text-yellow-400">JAVASCRIPT</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img src={reactLogo} alt="React" className="mx-auto bg-white rounded-full mb-4 w-40 h-40 hover:scale-110 duration-200 cursor-pointer" />
                                <p className="text-3xl font-bold">89%</p>
                            </div>
                            <p className="mt-4 text-2xl text-yellow-400">React</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img src={reduxLogo} alt="Redux" className="mx-auto bg-white rounded-full mb-4 p-2 w-30 h-40 hover:scale-110 duration-200 cursor-pointer" />
                                <p className="text-3xl font-bold">93%</p>
                            </div>
                            <p className="mt-4 text-2xl text-yellow-400">Redux</p>
                        </div> 

                        <div className="text-center">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img src={bootstrap} alt="Bootstrap" className="mx-auto bg-white rounded-full mb-4 w-40 h-40 hover:scale-110 duration-200 cursor-pointer" />
                                <p className="text-3xl font-bold">99%</p>
                            </div>
                            <p className="mt-4 text-2xl text-yellow-400">BOOTSTRAP</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img src={tailwindLogo} alt="Tailwind" className="mx-auto bg-white rounded-full mb-4 w-40 h-40 hover:scale-110 duration-200 cursor-pointer" />
                                <p className="text-3xl font-bold">93%</p>
                            </div>
                            <p className="mt-4 text-2xl text-yellow-400">Tailwind css</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img src={photoshopLogo} alt="Photoshop" className="mx-auto bg-white rounded-full mb-4 w-40 h-40 hover:scale-110 duration-200 cursor-pointer" />
                                <p className="text-3xl font-bold">93%</p>
                            </div>
                            <p className="mt-4 text-2xl text-yellow-400">ADOBE PHOTOSHOP</p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Skill
