import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Scores.css';


const Scores = () => {
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