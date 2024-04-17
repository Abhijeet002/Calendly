import React from 'react'


// this is coontact page 
function Contact() {
    return (
        <div className=' p-5 md:px-[15vw] text-center '>
            <div>

                <h1 className=' text-3xl sm:text-4xl md:text-5xl font-extrabold m-5 mb-10 leading-tight'>We take the manual work out of scheduling</h1>
                <h3 className='m-5 text-2xl leading-8 tracking-[0.05]'>Get instant access to all these features and more, so that you can have more productive meetings without the back-and-forth.</h3>
                <button className='bg-blue-500 border-solid border-2 border-blue-500 text-white rounded-full font-semibold text-base m-5 mx-5 p-3 px-6  hover:bg-blue-600 transition-colors'>Start for Free</button>
                <button className='bg-white border-solid border-2 text-slate-950 border-slate-950 rounded-full text-base font-semibold m-5 mx-5 px-6 p-3  hover:bg-slate-950 hover:text-white transition-colors'>Contact Sales</button>
            </div>

        </div>
    )
}
export default Contact;