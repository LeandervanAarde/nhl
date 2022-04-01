import React from 'react';

const scoreItem = (props) => {
    return (
        <>
        {/* props for score items */}
           <div className='text' id='right' key={props.id}><h3>{props.score}</h3></div>
            <div className='text' id='right' key={props.idAway}><h3>{props.scoreAway} </h3></div>
        </>
    );
};

export default scoreItem;