import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../Bodynav.css';
import { Link } from 'react-router-dom'

const Bodynavigation = () => {
    return (
        <Row>
            <Col className="col-12 col-lg-4 Nav">
                <Link to="/">
                    <div className='icon col-4 offset-4 mt-5 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> </svg>
                    </div>

                    <h3 className='text-center mt-5'>PLAYER COMPARE</h3>
                </Link>

            </Col>

            <Col className="col-12 col-lg-4 Nav">
                <Link to="/Teamcompare">
                    <div className='icon col-4 offset-4 mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    </div>
                    <h3 className='text-center mt-5'>TEAM COMPARE</h3>
                </Link>

            </Col>

            <Col className="col-12 col-lg-4 Nav">
                <Link to="/Playertimeline">
                    <div className='icon col-4 offset-4 mt-5 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> </svg>                    </div>
                            <h3 className='text-center mt-5'>PLAYER TIMELINE</h3>
                </Link>

            </Col>
        </Row>
    );
};

export default Bodynavigation;




