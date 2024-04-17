import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-slate-950">
            <div className="container p-6  mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h2 className='sm:text-3xl font-bold text-blue-600'>Easy <br/><span className='text-slate-800'>ahead</span></h2>
                        <p className='text-gray-600'>We take the work out of connecting with others so that you can accomplish more</p>
                        
                    </div>
                    <div className="mb-6 text-center">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>
                        <ul className="list-none mb-0">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Link 1</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Link 2</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Link 3</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 text-center">
                        <h5 className="uppercase font-bold mb-2.5 ">Links</h5>
                        <ul className="list-none mb-0">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Link 1</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Link 2</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Link 3</a></li>
                        </ul>
                    </div>

                    {/* Add additional columns here */}

                    <div className="mb-6 text-center">
                        <h5 className="uppercase font-bold mb-2.5">Contact</h5>
                        <ul className="list-none mb-0">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Email</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Phone</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Address</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-gray-600 text-center p-4 bg-gray-300">
                © 2024 Calendly. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
