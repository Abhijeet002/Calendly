import React from 'react'
import Logo from '../img/doordash-logo.svg'
import Logo2 from '../img/compass-customer-logo.svg'
import Logo3 from '../img/dropbox-customer-logo.svg'
import Logo4 from '../img/loreal-customer-logo.svg'
import Logo5 from '../img/lyft-customer-logo.svg'
import Logo6 from '../img/zendesk-customer-logo.svg'
import Logo7 from '../img/Gong-logo.svg'
import Logo8 from '../img/carnival-customer-logo.svg'


function Collab() {
    return (

        <div id='teams' className='flex flex-wrap py-8 md:py-16 justify-center bg-slate-100  '>
            <div className='w-full md:w-1/2 p-4 md:p-10 flex flex-wrap justify-center items-center text-center'>
                <h2 className='text-center text-2xl md:text-3xl font-semibold'>Simplified scheduling for more than <strong className='text-blue-500'>10,000,000</strong> users worldwide</h2>
            </div>
            <div className='flex flex-wrap justify-around py-4 md:py-10 px-5'>
                <img className='px-2 md:px-5 py-2 md:py-5' src={Logo}></img>
                <img className='px-2 md:px-5 py-2 md:py-5' src={Logo2}></img>
                <img className='px-2 md:px-5 py-2 md:py-5' src={Logo3}></img>
                <img className='px-2 md:px-5 py-2 md:py-5' src={Logo4}></img>
                <img className='px-2 md:px-5 py-2 md:py-5' src={Logo5}></img>
                <img className='px-2 md:px-5 py-2 md:py-5' src={Logo6}></img>
                <img className='px-2 md:px-5 py-2 md:py-5' src={Logo7}></img>
                <img className='px-2 md:px-5 py-2 md:py-5' src={Logo8}></img>
            </div>
        </div>


    )
}

export default Collab;