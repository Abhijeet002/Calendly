import React from 'react';
import ServicesImg from '../img/ServicesImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faLaptop, faMobile,faCloud } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="flex flex-col justify-center items-center  p-4 md:p-10 md:pt-0 bg-blue-50">

            <div className="text-center w-full md:w-3/4 p-5 md:px-10  m-5">
                <h1 className='text-slate-800 text-center text-3xl sm:text-4xl  md:text-5xl font-bold py-6 sm:py-10 leading-tight'>Stay in sync from any app, on any device</h1>
                <h3 className='text-slate-800 sm:text-2xl  hidden md:block '>Reclaim your time and your tabs with native integrations with over 70 different apps, and mobile and browser apps for easier access</h3>
            </div>

            <div className="flex flex-col justify-center items-center  md:flex-row ">

                <div className="w-full md:w-1/2 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4   md:p-0">
                    <FontAwesomeIcon className='h-7' icon={faHandshake} style={{ color: "#2563eb", }} />
                        <h4 className='text-xl font-semibold my-5'>Calendly for Browsers</h4>
                        <p className='text-gray-500 mb-5 leading-7'>Use Calendly while you're on the web, without switching tabs</p>
                        <button className='text-blue-600 font-semibold mb-5 hover:text-blue-500'>Learn more  &#10095;</button>
                    </div>

                    <div className="p-4 md:p-0">
                    <FontAwesomeIcon className='h-7' icon={faMobile} style={{ color: "#2563eb", }}/>
                        <h4 className='text-xl font-semibold my-5'>Calendly for Browsers</h4>
                        <p className='text-gray-500 mb-5 leading-7'>Use Calendly while you're on the web, without switching tabs</p>
                        <button className='text-blue-600 font-semibold mb-5  hover:text-blue-500'>Learn more  &#10095;</button>
                    </div>

                    <div className="p-4 md:p-0">
                    <FontAwesomeIcon className='h-7' icon={faLaptop}  style={{ color: "#2563eb", }} />
                        <h4 className='text-xl font-semibold my-5'>Calendly for Browsers</h4>
                        <p className='text-gray-500 mb-5 leading-7'>Use Calendly while you're on the web, without switching tabs</p>
                        <button className='text-blue-600 font-semibold mb-5  hover:text-blue-500'>Learn more  &#10095;</button>
                    </div>

                    <div className="p-4 md:p-0">
                    <FontAwesomeIcon className='h-7' icon={faCloud} style={{ color: "#2563eb", }} />
                        <h4 className='text-xl font-semibold my-5'>Calendly for Browsers</h4>
                        <p className='text-gray-500 mb-5 leading-7'>Use Calendly while you're on the web, without switching tabs</p>
                        <button className='text-blue-600 font-semibold mb-5  hover:text-blue-500'>Learn more  &#10095;</button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-4 hidden md:inline-flex">
                    <img src={ServicesImg} alt="Image" className="max-w-full h-auto" />
                </div>
            </div>

        </div>
    );
}

export default Services;
