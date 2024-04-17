import React from "react";
import Img1 from '../img/customer.jpg'
import Img2 from '../img/sales.jpg'
import Img3 from '../img/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg'
import Img4 from '../img/education.jpg'





function Explore() {
    return (
        <div id="explore" className="bg-slate-950 text-white p-10 ">
            <div className="flex justify-center items-center flex-col mb-20 text-center">
                <p className=" text-cyan-400 mb-10">EXPLORE</p>
                <h1 className="text-3xl sm:text-4xl  md:text-5xl font-semibold leading-tight">
                    Discover more ways to work with <br /> Calendly
                </h1>
            </div>

            <div className="flex flex-wrap flex-row justify-evenly my-5 ">
                <div className="bg-white text-black  rounded-lg w-fit my-5 md:w-5/12 lg:w-1/5 ">
                    <div className="top ">
                        <img className=" w-fit rounded-t-lg" src={Img4}></img>

                    </div>
                    <div className="botttom pl-5 py-5 pr-5"><h1 className=" text-slate-900 font-semibold  pb-5 text-xl">Sales</h1>
                        <p className="text-gray-500">Get your best leads faster</p>
                        <button className="my-5 text-blue-600">Learn more &#10095;
                        </button>
                    </div>
                </div>

                <div className="bg-white text-black  rounded-lg w-fit my-5 md:w-5/12 lg:w-1/5 ">
                    <div className="top">
                        <img className="w-fit rounded-t-lg" src={Img2}></img>

                    </div>
                    <div className="botttom pl-5 py-5 pr-5"><h1 className="  text-slate-900 font-semibold pb-5 text-xl">Sales</h1>
                        <p className="text-gray-500">Get your best leads faster</p>
                        <button className="my-5 text-blue-600">Learn more &#10095;</button>
                    </div>
                </div>

                <div className="bg-white text-black  rounded-lg w-fit my-5 md:w-5/12 lg:w-1/5">
                    <div className="top">
                        <img className="w-fit rounded-t-lg" src={Img1}></img>

                    </div>
                    <div className="botttom pl-5 py-5 pr-5"><h1 className="  text-slate-900 font-semibold pb-5 text-xl">Sales</h1>
                        <p className="text-gray-500">Get your best leads faster</p>
                        <button className="my-5 text-blue-600">Learn more &#10095;</button>
                    </div>
                </div>

                <div className="bg-white text-black rounded-lg w-fit my-5 md:w-5/12 lg:w-1/5">
                    <div className="top">
                        <img className="w-fit rounded-t-lg" src={Img3}></img>

                    </div>
                    <div className="botttom pl-5 py-5 pr-5"><h1 className="  text-slate-900 font-semibold pb-5 text-xl">Sales</h1>
                        <p className="text-gray-500">Get your best leads faster</p>
                        <button className="my-5  text-blue-600">Learn more &#10095;</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Explore;