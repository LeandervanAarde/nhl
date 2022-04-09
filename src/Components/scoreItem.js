import React from 'react';

const scoreItem = (props) => {
    return (
        <>
            <div className='circle '>
                <img src={props.logoOne}/>
            </div>
          
            <div className='text' id='right' key={props.id}><h3>{props.score}</h3></div>
            <div className='text' id='right' key={props.idAway}><h3>{props.scoreAway}</h3></div> 

             <div className='circle '>

            </div>    
        </>
    );
};

export default scoreItem;