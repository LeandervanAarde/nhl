import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Scores.css';
import axios from 'axios';


const Scores = () => {

    axios.get('https://statsapi.web.nhl.com/api/v1/schedule')
    .then((response)=>{
        let scores = response.data.dates[0].games;
        // console.log(scores);




    },[])

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