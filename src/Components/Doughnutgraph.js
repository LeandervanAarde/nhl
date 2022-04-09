import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../Overview.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import { Doughnut, Pie } from 'react-chartjs-2';
import { useState, useEffect, useRef } from "react";
import Topteams from './Topteams';

const Doughnutgraph = () => {
    return (
        <Doughnut data ={{


            labels:["hello from", "the otherside",],
            datasets: [{
                label: "hotter totter",
                data: [10,23],
                backgroundColor: ["rgba(169, 169, 169, 0.7)", "rgba(56, 0, 84, 0.7)" ],
            }],      
            borderwidth: 0

        }} height={260} options ={{
            responsive: false,
            maintainAspectRatio: true,
            plugins: {
                decimation: {
                    enabled: true,
                },
                title: {
                    display: true,
                    text: "Wins vs/losses ",
                    position: "bottom",
                    color: "white",
                    font: {
                        size: 24,
                        weight: "bold",

                    }
                },
                legend: {
                    position: "top",
                    label: {
                        display: false,
                        padding: 30,
                        boxWidth: 30,
                        boxHeight: 20,
                    }
                }
            },
            responsive: true,
            animation: {
                easing: 'easeInOutBounce',
                duration: 1800,
                numSteps: 2,
            },
           
        }}/>
    );
};

export default Doughnutgraph;