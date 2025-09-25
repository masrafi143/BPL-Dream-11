import React, { use } from 'react';
import AvailablePlayer from './AvailablePlayer';

const AvailablePlayers = ({playerPromise}) => {
    const availablePlayers = use(playerPromise);
    console.log(availablePlayers);
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='flex justify-between items-center px-5 mb-5'>
            <h2 className='font-bold text-2xl'>Available Players: {availablePlayers.length} </h2>
            <div className='space-x-2'>
                <button className='btn bg-[#E7FE29]'>Available</button>
                <button className='btn'>Selected (<span>0</span>)</button>
            </div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    availablePlayers.map((players, index) => <AvailablePlayer key={index} players={players}/>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;