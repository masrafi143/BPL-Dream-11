import React, { use } from 'react';
import AvailablePlayer from './AvailablePlayer';

const AvailablePlayers = ({playerPromise}) => {
    const availablePlayers = use(playerPromise);
    console.log(availablePlayers);
    return (
        <div className='w-11/12 mx-auto mt-5'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    availablePlayers.map((players, index) => <AvailablePlayer key={index} players={players}/>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;