import React from 'react';
import './playerCard.css';

const PlayerCard = props => {
    const { name, country } = props.player;

    return (
        <div className="card-wrapper">
            <p className='card-name'>{name}</p>
            <p className='card-rank'>Team: {country}</p>
        </div>
    );
};

export default PlayerCard;