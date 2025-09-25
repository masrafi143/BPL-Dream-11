import React from 'react';
import navImg from '../assets/logo.png';
import coinImg from '../assets/dollar.png';
import bannerImg from '../assets/banner-main.png';
import bgImg from '../assets/bg-shadow.png';
const Header = ({availableBalance}) => {
    return (
        <>
        <nav>
            <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <a>
                    <img className='w-[60px]' src={navImg} alt="" />
                </a>
            </div>
            <div className="navbar-end">

            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
            </div>
            <div className="">
                <a className="btn flex items-center justify-center">
                    <span>{availableBalance}</span>
                    <span>Coin</span>
                    <img className='w-[20px]' src={coinImg} alt="" />
                </a>
            </div>
            </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
                </div>
            </div>
        </nav>
        <header className="w-11/12 mx-auto mt-1 py-10 rounded-2xl bg-[#131313] bg-cover bg-center text-center space-y-2" style={{ backgroundImage: `url(${bgImg})`}}>
            <img className='mx-auto' src={bannerImg} alt="" />
            <h1 className='text-white font-bold text-lg md:text-3xl '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-[#b8b8b8] font-bold'>Beyond Boundaries Beyond Limits</p>
            <div className='border border-[#E7FE29] w-fit mx-auto p-1 rounded'>
            <button className='btn bg-[#E7FE29]'>Claim Free Credit</button>
            </div>
        </header>
        </>
    );
};

export default Header;