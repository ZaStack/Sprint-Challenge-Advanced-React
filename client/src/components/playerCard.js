import React from 'react';

const PlayerCard = props => {
    const { name, rank, team } = props.player;

    return (
        <div className="card-wrapper">
            <p className='card-name'>{name}</p>
            <p className='card-rank'>World Ranking: {rank}</p>
            <p className='card-team'>Team: {team}</p>
        </div>
    );
};

export default PlayerCard;