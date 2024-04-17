import React from 'react';


const Features = () => {
    return (
        <div className="mx-auto p-10 flex flex-wrap justify-center bg-slate-100">
    {/* Card 1 */}
    <div className="w-full sm:w-auto sm:flex-1 lg:w-1/3 p-4">
        <div className="flex flex-col h-full bg-slate-50 p-6 rounded-lg shadow-lg text-left">
            <h2 className="text-xl font-semibold my-5">Availability preferences</h2>
            <p className="text-gray-700">Customize exactly how and when you are booked</p>
            <button className='text-blue-600 self-start mt-auto'>Learn more  &#10095;</button>
        </div>
    </div>
    {/* Card 2 */}
    <div className=" sm:w-auto lg:w-1/3 p-4">
        <div className="flex flex-col h-full bg-slate-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold my-5">Teams Scheduling</h2>
            <p className="text-gray-700">The automated scheduling you know and love-for multi-person meetings</p>
            <button className='text-blue-600 self-start mt-auto'>Learn more  &#10095;</button>
        </div>
    </div>
    {/* Card 3 */}
    <div className="w-full sm:w-auto  lg:w-1/3 p-4">
        <div className="flex flex-col h-full bg-slate-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold my-5">Routing forms</h2>
            <p className="text-gray-700">Request information to efficiently screen and qualify people before they can schedule with you</p>
            <button className='text-blue-600 self-start mt-auto'>Learn more  &#10095;</button>
        </div>
    </div>
</div>

    );
}

export default Features;
