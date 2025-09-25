import React from 'react';
import subscribeBtn from '../assets/subscribe-btn.png';
import bgImg from '../assets/bg-shadow.png';
const Newsletter = () => {

    return (
        <div className='border border-white p-3 w-10/12 mx-auto rounded-4xl  text-center space-y-2 mt-10 -mb-30 relative z-10'>
            <div className='space-y-2 flex flex-col items-center bg-white py-[60px] bg-cover bg-center rounded-3xl'style={{ backgroundImage: `url(${bgImg})`}}>
                <h3 className='font-bold text-2xl'>Subscribe to our Newsletter</h3>
                <p>Get the latest updates and news right in your inbox!</p>
                <div className="flex gap-3">
                    <input placeholder='Enter your email' className='bg-white border text-black md:w-[300px] pl-5 h-12 rounded-[11px]' type="text" />
                    <button className='btn h-12 p-0 rounded-[11px]'>
                        <img src={subscribeBtn} className='w-full h-full object-cover' alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;