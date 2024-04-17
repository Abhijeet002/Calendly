import React from 'react'
import Img from '../img/Img12.png'

function Hero() {
    return (

        <div className="flex flex-col md:flex-row">
            <div className="left pt-10 sm:pt-16 p-4 md:p-10 md:pt-24 pb-0 md:w-2/4 lg:w-1/2 items-end ">
                <p className="text-blue-500 font-semibold tracking-wider hidden md:inline-flex">CALENDLY FEATURES</p>
                <h1 className="text-center text-3xl sm:text-4xl  md:text-5xl  2xl:text-8xl md:text-left font-bold py-6 sm:py-10 leading-tight ">
                    Take the hassle out of <span className="text-blue-500 text-center">scheduling</span>
                </h1>
                <h3 className=" sm:text-2xl  2xl:text-5xl w-4/5 mx-auto hidden sm:block text-center  md:text-left md:w-full   ">
                    This can be confusing because it feels as if new rules are being made up in a game we thought we understood.
                </h3>
                <div className="mt-0 mb-5 sm:mt-10 ml-0 text-center md:text-left ">
                    <button className="bg-blue-500 rounded-full p-3 px-5 hover:bg-blue-300 transition-colors 2xl:text-3xl">Start for free</button>
                </div>
            </div>

            <div className="right flex justify-center items-center md:p-0 md:w-1/2 lg:w-1/2">
                <img src={Img} className=" w-full md:w-[80%] lg:w-[90%] hidden md:flex" alt="Illustration" />
            </div>
        </div>

    )
}


export default Hero;