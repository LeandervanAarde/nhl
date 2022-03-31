import React from 'react';

const scoreItem = (props) => {
    return (
        <>
           <div className='text' key={props.id}><h3>{props.score}</h3></div>
            <div className='text' key={props.id2}><h3>{props.score2} </h3></div>
        </>
    );
};

export default scoreItem;