import React from 'react';
import ForImg from '../img/ForImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faImage, faList, faCheck } from '@fortawesome/free-solid-svg-icons';

const For = () => {
    return (
        <div id='product' className="flex flex-col-reverse justify-center items-center  md:flex-row p-4 md:p-10 bg-blue-50">

            <div className="w-full md:w-1/2 p-4 hidden md:inline-flex">
                <img src={ForImg} alt="Image" className="max-w-full h-auto" />
            </div>

            <div className="w-full md:w-1/2 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4   md:p-0">
            <FontAwesomeIcon className='h-7' icon={faList} style={{ color: "#2563eb", }} />
                    <h4 className='text-xl font-semibold my-5'>Workflow</h4>
                    <p className='text-gray-500 mb-5 leading-7'>Automate communications before and after meetings</p>
                    <button className='text-blue-600 font-semibold mb-5  hover:text-blue-500'>Learn more  &#10095;</button>
                </div>

                <div className="p-4 md:p-0">
                <FontAwesomeIcon className='h-7' icon={faImage} style={{ color: "#2563eb", }} />
                    <h4 className='text-xl font-semibold my-5'>Website scheduling</h4>
                    <p className='text-gray-500 mb-5 leading-7'>Add Calendly to your website to streamline scheduling.</p>
                    <button className='text-blue-600 font-semibold mb-5  hover:text-blue-500'>Learn more  &#10095;</button>
                </div>

                <div className="p-4 md:p-0">
                <FontAwesomeIcon className='h-7' icon={faCalendarDays} style={{ color: "#2563eb", }} />
                    <h4 className='text-xl font-semibold my-5'>Calender connections</h4>
                    <p className='text-gray-500 mb-5 leading-7'>Connect upto six calenders per user to check real-time availability</p>
                    <button className='text-blue-600 font-semibold mb-5  hover:text-blue-500 '>Learn more  &#10095;</button>
                </div>

                <div className="p-4 md:p-0">
                <FontAwesomeIcon className='h-7' icon={faCheck} style={{ color: "#2563eb", }} />
                    <h4 className='text-xl font-semibold my-5'>Meeting polls</h4>
                    <p className='text-gray-500 mb-5 leading-7'>Poll yours attendees for thier availability and arrive at the best time for most</p>
                    <button className='text-blue-600 font-semibold mb-5  hover:text-blue-500 '>Learn more  &#10095;</button>
                </div>
            </div>
        </div>

    );
}

export default For;
