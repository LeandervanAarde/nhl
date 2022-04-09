import React from 'react';
import '../Teamcompare.css';

const Teamcards = (props) => {
    return (
        <div className='col-12 inner pt-3 pt-lg-0'>
            <div className='col-12 banner mb-4 d-none d-lg-block'><h4 className='text-center league-name'>National Hockey League Players</h4></div>
            <div className='col-lg-4 offset-lg-4 col-6 offset-3 player-icon'></div>
            <h1 className='text-center mt-4 player'>{props.name}</h1>
            <p className='Player-stat mt-lg-3 mt-2'><b>Wins</b> <span className='official-stat'> {props.wins}</span> </p>
            <p className='Player-stat mt-lg-3 mt-2'><b>Losses</b> <span className='official-stat'> {props.losses}</span> </p>
            <p className='Player-stat mt-lg-3 mt-2'><b>Power play</b> <span className='official-stat'>{props.powerPlayGoals}</span> </p>
        </div>
    );
};

export default Teamcards;