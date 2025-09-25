import React, { useState } from 'react';
import choosePlayerBtn from '../../assets/choose-player-btn.png'
import selectedBtn from '../../assets/selected-btn.png'
const AvailablePlayer = ({players, availableBalance, setAvailableBalance}) => {
    const { player_image, player_name, player_country, playing_role, rating, bating_style, bowling_style, price } = players;
    const [selected, setSelected] = useState(false);
    const handleSelected = () => {
        const playerPrice = parseInt(price.split(",").join("").split("USD").join(""));
        if(availableBalance > playerPrice){
            setAvailableBalance(availableBalance - playerPrice);
        } else{
            alert("Not enough coin to select player.");
            return;
        }
        setSelected(!selected);
    }
    return (
        <div className='border border-gray-300 shadow-lg rounded-2xl p-5 m-auto space-y-2'>
            <div className='h-[200px] w-[320px] mx-auto'>
            <img className='w-full h-full object-cover rounded-2xl'  src={player_image} alt="" />
            </div>
            <div className='flex items-center gap-2'>
                <div className='border rounded-full p-1 bg-gray-200'>
                <i class="fa-solid fa-user"></i>
                </div>
                <h2 className='font-bold text-lg md:text-2xl'>{player_name} </h2>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <i class="fa-solid fa-flag"></i>
                    <p>{player_country}</p>
                </div>
                <p className='p-2 bg-[#e6e6e6] rounded'>{playing_role}</p>
            </div>
            <hr />
            <div className='flex justify-between items-center'>
                <h3 className='font-bold'>Rating</h3>
                <p className='font-bold'>{rating}</p>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold'>Bating style: </h3>
                <p>{bating_style}</p>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold'>Bowling style: </h3>
                <p>{bowling_style}</p>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold'>Price: $<span>{price}</span></h3>
                <button disabled={selected} onClick={() => handleSelected()} className='btn p-0 rounded-[8px]'>
                <img src={selected===false? choosePlayerBtn : selectedBtn} className='w-full h-full object-cover' alt="" />
                </button>
            </div>

        </div>
    );
};

export default AvailablePlayer;