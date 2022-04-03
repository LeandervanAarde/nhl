// imports
import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../Head.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';


const Head = () => {
    return (
        <Row className='head-row'>


        <Navbar className='NavBar'  sticky="top"  expand="lg">
        <Container>
            <Navbar.Brand>
            <img
      alt=""
      src="../Assets/Logo.svg"
      width="90"
      height="80"
      className="d-inline-block align-top"
    />{' '}

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className='navlink'><Link to="/"><p>Player Compare</p></Link></Nav.Link>
                <Nav.Link className='navlink'><Link to="/Teamcompare"><p>Team Compare</p></Link></Nav.Link>
                <Nav.Link className='navlink'><Link to="/Playertimeline"><p>Player Timeline</p></Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>    
            
        <Col className='head d-none d-lg-block col-lg-4'>
            <h4 className='text-center mt-5 mt-lg-4 d-none d-lg-block welcome'>Welcome to,</h4>
            <h1 className='text-center title'>CHEL</h1>
            <p className='text-center mt-1 mt-lg-4 d-none d-lg-block '> 
                Chel allows you to compare player and team statistics to one another, whether you are comparing the Great One to the Great 8 or Sidney Crosby to Connor McDavid. 
                Chel offers a complete and up to date data set which allows you to make decisions on who your favorite player is!
                Take a look at averages, highs and lows of player careers and compare player statistics by year.
            </p>
                <br></br>
                <br></br>
           
        </Col>

        <Col className='model-viewer col-12 col-lg-4'>
                    <h1 className='text-center mt-4 mt-lg-4 d-block d-lg-none welcome'>Welcome to, <br/></h1><h1 className='text-center title d-block d-lg-none'>CHEL</h1>

                    <p className='text-center  mt-1 mt-lg-4 d-block d-lg-none '> Chel is a comparitive data web Application that gives allows you to compare you favorite players of all time. Here you can look at all player stats from the start of their NHL career and track their averages, compare them or view how they have improved. </p>
                    
                    
                
                <model-viewer className ="small-model" alt="Puck model" camera-orbit="120deg 70deg 210%" auto-rotate rotation-per-second="30deg" src="../3D/LEANDERRR.gltf" seamless-poster shadow-intensity="1"></model-viewer>
        </Col>
    </Row>
        
    );
};

export default Head;