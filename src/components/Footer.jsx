import React from 'react';
import subscribeBtn from '../assets/subscribe-btn-footer.png'
import logoFooter from '../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-[#06091A] text-white pt-[200px]  mt-10'>
            <img className='mx-auto mb-5' src={logoFooter} alt="" />
            <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-[60px] pb-10'>
                <div className='space-y-2'>
                    <h3 className='font-bold text-2xl'>About Us</h3>
                    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='text-center space-y-2 w-fit md:w-full'>
                    <h3 className='font-bold text-2xl'>Quick Links</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href=""></a>About</li>
                        <li><a href=""></a>Contact</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <h3 className='font-bold text-2xl'>Subscribe</h3>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex ">
                        <input placeholder='Enter your email' className='bg-white text-black pl-5 h-12 rounded-l-[11px]' type="text" />
                        <button className='btn h-12 p-0 rounded-l-none rounded-r-[11px]'>
                            <img src={subscribeBtn} className='w-full h-full object-cover' alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <p className='py-5 text-center'>@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;