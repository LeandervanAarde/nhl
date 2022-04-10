import React from 'react';

const scoreItem = (props) => {
    return (
        <>
            <div className='circle ' 
            
            style={{  
                backgroundImage: "url(" + props.logoOne + ")",
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
            >
                {/* <img className='logo' src={props.logoOne}/> */}
            </div>
          
            <div className='text' id='right' key={props.id}><h3>{props.score}</h3></div>
            <div className='text' id='right' key={props.idAway}><h3>{props.scoreAway}</h3></div> 

             <div className ='circle '
                 style={{  
                    backgroundImage: "url(" + props.logoTwo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}
             >
          
            </div>    
        </>
    );
};

export default scoreItem;