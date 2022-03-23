import React from 'react';
import Col from 'react-bootstrap/Col';
 

const Playercard = (props) => {
    
    return (
        <div className='col-12 inner pt-3 pt-lg-0'>
            <div className='col-12 banner mb-4 d-none d-lg-block'><h4 className='text-center league-name'>National Hockey League Players</h4></div>
            <div className='col-lg-4 offset-lg-4 col-6 offset-3 player-icon'></div>
            <h1 className='text-center mt-4 player'>PLAYER NAME</h1>
            <h2 className='text-center mt-3 number'>#00</h2>
            <p className='Player-stat mt-lg-3 mt-2'><b>Stat</b> <span className='official-stat'> 234</span> </p>
            <p className='Player-stat mt-lg-3 mt-2'><b>Stat</b> <span className='official-stat'> 234</span> </p>
            <p className='Player-stat mt-lg-3 mt-2'><b>Stat</b> <span className='official-stat'> 234</span> </p>
            <p className='Player-stat mt-lg-3 mt-2'><b>Stat</b> <span className='official-stat'> 234</span> </p>

        </div>
    );
};

export default Playercard;