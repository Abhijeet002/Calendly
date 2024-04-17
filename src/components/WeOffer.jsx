import React from 'react';
import WeOfferImg from '../img/WeOfferImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faHandshake, faSchool } from '@fortawesome/free-solid-svg-icons';


const WeOffer = () => {
    return (
        <div id='WeOffer' className=" bg-slate-950">
            <div className='text-white text-center w-3/5 mx-auto py-16'>
                <h1 className='text-center font-bold text-3xl sm:text-4xl  md:text-5xl  2xl:text-8xl '>For teams of all sizes</h1>
                <h3 className='text-center sm:text-2xl  2xl:text-5xl py-10 sm:leading-8 hidden md:block'>From a small business to a fortune 100 enterprises- Calendly supports scheduling at a scale with robust security and administrative controls</h3>
            </div>

            <div className='flex-col md:flex-row md:flex p-[4vw] items-center'>

                <div className="w-full md:w-1/2 p-4 hidden md:flex">
                    <img src={WeOfferImg} alt="Image" className="max-w-full h-auto rounded-lg shadow-lg" />
                </div>

                <div className="  w-full md:w-1/2 p-4">

                    <div className="p-4 bg-blue-50 rounded-lg shadow-lg">
                        <FontAwesomeIcon className='h-7' icon={faShieldHalved} style={{ color: "#2563eb", }} />
                        <h4 className="text-xl font-semibold my-5">Calendly for Browsers</h4>
                        <p className="text-gray-500 mb-5 leading-7">Use Calendly while you're on the web, without switching tabs</p>
                        <button className="text-blue-600 font-semibold mb-5  hover:text-blue-500">Learn more  &#10095;</button>
                    </div>
                    <div className=" bg-blue-50 p-4 rounded-lg shadow-lg mt-4">
                        <FontAwesomeIcon className='h-7' icon={faHandshake} style={{ color: "#2563eb", }} />
                        <h4 className="text-xl font-semibold my-5">Calendly for Browsers</h4>
                        <p className="text-gray-500 mb-5 leading-7">Use Calendly while you're on the web, without switching tabs</p>
                        <button className="text-blue-600 font-semibold mb-5  hover:text-blue-500">Learn more  &#10095;</button>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg shadow-lg mt-4">
                        <FontAwesomeIcon className='h-7' icon={faSchool} style={{ color: "#2563eb", }} />
                        <h4 className="text-xl font-semibold my-5">Calendly for Browsers</h4>
                        <p className="text-gray-500 mb-5 leading-7">Use Calendly while you're on the web, without switching tabs</p>
                        <button className="text-blue-600 font-semibold mb-5  hover:text-blue-500">Learn more  &#10095;</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WeOffer;
