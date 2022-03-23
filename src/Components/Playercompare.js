import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../playercompare.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import getPlayerId from "../players.js";
import { useState, useEffect, useRef } from "react";

const Playercompare = () => {

    
    axios.get('https://statsapi.web.nhl.com/api/v1/people/8477474')
    .then((response) => {
        console.log(response.data.people[0].fullName);

    }).catch((error) => {

        console.log(error);
    });


    //Bar data

    const barData ={


        labels: ['Shots', 'Goals', 'Penalties', 'TOI', 'hits'],
        datasets: [
            {

                label: "Player one",
                data: [152, 50, 12, 76, 45.8],
                backgroundColor: [" rgb(200 ,16, 46)"],
        

                
            },
            {
                label: "Player two",
                data: [122, 48, 8, 76, 10],
                backgroundColor: ["rgb(30, 30, 148)"],


            }, 

        ],
       
        

    };


    //Radar data 

    const radarData ={
        labels: ['Shots', 'Goals', 'Penalties', 'TOI', 'Five'],
                        datasets: [
                            {

                                label: "Player one",
                                data: [12, 43, 12, 8, 2],
                                backgroundColor: [" rgb(200 ,16, 46)"],


                            },
                            {
                                label: "Player two",
                                data: [12, 43, 12, 8, 2],
                                backgroundColor: ["rgb(30, 30, 148)"],

                            }



                        ],
                        borderwidth: 1
    }; 



    return (

        

        <Row className='player-compare-row'>
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
                        placeholder="Player Name"
                        aria-label="Player Name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

            </Col>



            <Col className=' col-6 col-lg-5 card-1 '>
                {/* {Showplayer1}  */}

            </Col>

            <Col className=' col-6 col-lg-5 card-2 '>
                {/* {Showplayer2}  */}
            </Col>

            <Col className='col-12 toggle-holder'>
                <div className=' col-4  col-lg-1  toggle-outline'>
                    <div className='col-5 c slider-btn'></div>
                </div>
            </Col>


            <Col className=' col-12 col-lg-7 chart-container p-2 mt-5 mb-2'>
                <div className='piebar col-12  '>
                    <Bar data={barData}
                         options={{
                             responsive: true,
                            plugins:{
                                decimation:{
                                    enabled: true, 
                                },
                                title:{
                                    display: true,
                                    text: "Player stats",
                                    position: "bottom",
                                    color: "white",
                                    font:{
                                        size: 24, 
                                        weight: "bold",
                                          
                                    }
                                },
                                legend:{
                                    position: "bottom", 
                                   labels:{
                                   display: true,
                                    padding: 30, 
                                    boxWidth: 30,
                                    boxHeight: 20, 
                                   
                                   }
                                }
                            }, 
                            indexAxis: 'y',
                            responsive: true,
                            animation:{
                                easing: 'easeInOutBounce',
                                duration: 1800,
                                numSteps: 2, 
                            },
    
                            datasets:{
                               bar:{
                                   base: 0,
                                   borderWidth: 3,
                                   hoverBorderColor: "white", 
                                   hoverBorderWidth: 3,
                                   borderRadius: 10, 
    
                               }
                            }
                          }}
                    
                    
                    />
                </div>
            </Col>

            <Col className=' col-12 col-lg-5 chart-container p-2 mt-5 mb-2'>
                <div className='radar col-12  '>
                    <Radar data = {radarData}

height={100}

options={{
    responsive: true,
   plugins:{
       decimation:{
           enabled: true, 
       },
       legend:{
           display: false,
         
       }
   }, 
 

 }}

                  
                    />
                </div>
            </Col>


        </Row>
    );
};

export default Playercompare;



