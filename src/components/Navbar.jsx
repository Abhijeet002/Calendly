import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC } from '@fortawesome/free-solid-svg-icons';



// const element = <FontAwesomeIcon icon={duotone.fas['C']} />
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 text-white px-10">
            <div className="max-w-7xl mx-auto py-6 flex justify-between items-center">
                <div>
                    <FontAwesomeIcon className='h-7 text-xl font-bold' icon={faC} />
                    {/* <a href="#" className="text-xl font-bold"></a> */}
                </div>
                <div className="hidden md:flex flex-grow items-center justify-center">
                    <a href="#" className="mx-4">Individual</a>
                    <a href="#teams" className="mx-4">Team</a>
                    <a href="#WeOffer" className="mx-4">Enterprise</a>
                    <a href="#Product" className="mx-4">Product</a>
                    <a href="#" className="mx-4">Pricing</a>
                    <a href="#explore" className="mx-4">Resources</a>
                </div>
                <div className="flex items-center">
                    <button className="hidden md:block bg-transparent border border-white px-4 py-2 rounded-lg text-white mr-4 hover:bg-white hover:text-slate-950">Login</button>
                    <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <a href="#" className="block py-2 px-4">Individual</a>
                    <a href="#teams" className="block py-2 px-4">Team</a>
                    <a href="#WeOffer" className="block py-2 px-4">Enterprise</a>
                    <a href="#Product" className="block py-2 px-4">Product</a>
                    <a href="#" className="block py-2 px-4">Pricing</a>
                    <a href="#explore" className="block py-2 px-4">Resources</a>
                    <button className="block py-2 px-4 text-white">Login</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
