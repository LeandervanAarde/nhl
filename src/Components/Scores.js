import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Scores.css';
import axios from 'axios';


const Scores = () => {
    useEffect(()=>{


        
    })

    return (
        <Row className='footer-row'>
            <Col className='col-6 scores'>
                <div className='circle '>

                </div>

                <div className='text'><h3>0 - 0 </h3></div>

                <div className='circle '>

                </div>

            </Col>

            

            <Col className='col-6 scores'>

                <div className='circle '>

                </div>

                <div className='text'><h3>0 - 0 </h3></div>

                <div className='circle '>

                </div>
            </Col>



        </Row>
    );
};

export default Scores;