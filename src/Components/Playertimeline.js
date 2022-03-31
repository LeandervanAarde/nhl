import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../Playertimeline.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';



const Playertimeline = () => {

    const lineData = {

        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
            {

                label: "stat one",
                data: [19, 12, 52, 45, 62, 30],
                backgroundColor: ["rgb(200 ,16, 46)"],


            },
            {

                label: "stat two",
                data: [19, 9, 72, 20, 17, 78],
                backgroundColor: [" rgb(30, 30, 148)"],


            },
            {

                label: "stat three",
                data: [62, 68, 36, 78, 60, 1],
                backgroundColor: [" rgb(95, 3, 114)"],


            },
            {

                label: "stat four",
                data: [20, 45, 59, 67, 90, 14],
                backgroundColor: [" rgb(197, 197, 197)"],


            },



        ],
        borderwidth: 1

    };
            

    return (
        <Row className='timeline-row'>
            <Col className='col-12 col-lg-4 input-container' id='input'>
                <InputGroup className="mb-3 mt-4 input" >
                    <FormControl
                        placeholder="Player Name"
                        aria-label="Player Name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

            </Col>

            <Col className='col-12 col-lg-4 offset-lg-4  input-container'>
                <InputGroup className="mb-3 mt-4 input">
                    <FormControl
                        placeholder="season eg. 2020/2021"
                        aria-label="Season"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

            </Col>

            <Col className='col-12 col-lg-3 input-container '>

                <DropdownButton id="dropdown-custom" title="Player Statistic #1" className="mb-3 mt-4 col-12 input drop">
                    <Dropdown.Header className='dropdown-head'>Choose player statistic #1 </Dropdown.Header>
                    <Dropdown.Item href="#/action-2">Shots</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Shot Pct</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Assists</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Powerplay Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Points</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Penalties (min)</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Plus Minus</Dropdown.Item>
                </DropdownButton>

            </Col>

            <Col className='col-12 col-lg-3 input-container'>

                <DropdownButton id="dropdown-custom" title="Player Statistic #2" className="mb-3 mt-4 col-12 input drop">
                    <Dropdown.Header className='dropdown-head'>Choose player statistic #2 </Dropdown.Header>
                    <Dropdown.Item href="#/action-2">Shots</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Shot Pct</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Assists</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Powerplay Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Points</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Penalties (min)</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Plus Minus</Dropdown.Item>
                </DropdownButton>

            </Col>

            <Col className='col-12 col-lg-3 input-container'>

                <DropdownButton id="dropdown-custom" title="Player Statistic #3" className="mb-3 mt-4 col-12 input drop">
                    <Dropdown.Header className='dropdown-head'>Choose player statistic #3 </Dropdown.Header>
                    <Dropdown.Item href="#/action-2">Shots</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Shot Pct</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Assists</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Powerplay Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Points</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Penalties (min)</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Plus Minus</Dropdown.Item>
                </DropdownButton>

            </Col>

            <Col className='col-12 col-lg-3 input-container'>

                <DropdownButton id="dropdown-custom" title="Player Statistic #4" className="mb-3 mt-4 col-12 input drop">
                    <Dropdown.Header className='dropdown-head'>Choose player statistic #4 </Dropdown.Header>
                    <Dropdown.Item href="#/action-2">Shots</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Shot Pct</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Assists</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Powerplay Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Points</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Penalties (min)</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Plus Minus</Dropdown.Item>
                </DropdownButton>

            </Col>

            <Col className='col-12 chart-container mt-5 mb-5'>
                <div className='timeline col-12 mb-2'>
                        <Line data ={lineData}
                        
                        options={{
                      
                        elements: {
                            line: {
                                borderWidth: 9,
                                borderColor: ["rgb(200 ,16, 46)", "rgb(30, 30, 148)", "rgb(95, 3, 114)", "rgb(197, 197, 197)"],
                            }
                        },
                        maintainAspectRatio: false,
                        
                        plugins:{
                            decimation:{
                                enabled: true, 
                            },
                           
                            legend:{
                                position: "bottom", 
                               labels:{
                               
                                padding: 30, 
                                boxWidth: 30,
                                boxHeight: 20, 
                                
                               
                               }
                            }
                        }, 


                    
                    }}
                        
                        />
                </div>
            </Col>

        </Row>

    );
};

export default Playertimeline;