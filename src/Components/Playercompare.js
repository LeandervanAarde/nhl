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
import { useState, useEffect, useRef } from "react";
import players from '../Players.js';

const Playercompare = () => {

    // let axiosurl= 'https://statsapi.web.nhl.com/api/v1/people/' +id; 
    const [playerOneName, setPlayerOneName] = useState("Choose player name");
    const [playerTwoName, setPlayerTwoName] = useState("Choose player name");
    const [playerName, setPlayerName] = useState();
    const [playerOnenr, setPlayerOnenr] = useState();
    const [playerNameTwo, setPlayerNameTwo] = useState();
    const [playerTwonr, setPlayerTwonr] = useState();
    const [playerOneStatistics, setPlayerOneStatistics] = useState();
    const [apiLink, setApiLink] = useState();


    const updatePlayerName = (event) => {

        setPlayerName(event.target.value);
    };

    const updateplayerTwo = (event) => {

        setPlayerNameTwo(event.target.value);
    };

    function playerOneId() {

        for (let i = 0; i < players.length; i++) {
            if (playerName === players[i].name) {
                // console.log(players[i]);
                let idOne = players[i].id;

                setPlayerOnenr(idOne);
                setApiLink('https://statsapi.web.nhl.com/api/v1/people/' + idOne + '/stats?stats=yearByYear'); 

            }

        }
       
    }
    
    // console.log(playerOnenr);


    useEffect(() => {
    
        axios.get(apiLink)
            .then((response) => {
                let data = response.data.stats[0].splits;
                // console.log(data);
                const playerOnestats = [];

                for (let i = 0; i < data.length; i++) {
                    if (data[i].league.name === 'National Hockey League') {
                        playerOnestats.push({
                            season: data[i].season,
                            assists: data[i].stat.assists,
                            goals: data[i].stat.goals,
                            powerPlayPoints: data[i].stat.powerPlayPoints,
                            blocked: data[i].stat.blocked,
                            gwg: data[i].stat.gameWinningGoals,
                            hits: data[i].stat.hits,
                            penaltyMinutes: data[i].stat.pim,
                            plusminus: data[i].stat.plusMinus,
                            points: data[i].stat.points,
                            shotPct: data[i].stat.shotPct,
                            shots: data[i].stat.shots,
                        });
                    }
                }
                const goalArr = [];
                const shotArr = [];
                const assArr =[];
                const penArr =[];
                const HitArr =[];
              
                // for(let j = 0; j < playerOnestats.length; j++){
                //     const goals = playerOnestats[j].goals;
                //     goalArr.push(goals);
                //     console.log(goalArr);

                //     const assist = playerOnestats[j].goals;
                //     shitArr.push(goals);
                //     console.log(goalArr);

                //     const goals = playerOnestats[j].goals;
                //     goalArr.push(goals);
                //     console.log(goalArr);

                //     const goals = playerOnestats[j].goals;
                //     goalArr.push(goals);
                //     console.log(goalArr);

                //     const goals = playerOnestats[j].goals;
                //     goalArr.push(goals);
                //     console.log(goalArr);

                // }
               

                // setPlayerOneStatistics(playerOnestats);
          
            })
           
    }, [apiLink])




    function playerTwoId() {

        for (let i = 0; i < players.length; i++) {
            if (playerNameTwo === players[i].name) {
                console.log(players[i]);
                let idTwo = players[i].id;
                setPlayerTwonr(players[i].id);

            }
        }
    }
    console.log(playerTwonr);

    const barData = {



        labels: ['Shots', 'Goals', 'Penalties', 'TOI', 'hits'],
        datasets: [
            {

                label: "hey",
                data: [152, 50, 12, 76, 45.8],
                backgroundColor: [" rgb(200 ,16, 46)"],
            },
            {
                label: "hey",
                data: [122, 48, 8, 76, 10],
                backgroundColor: ["rgb(30, 30, 148)"],
            },

        ],

    };
    //Radar data 

    const radarData = {
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
                        placeholder={playerOneName}
                        aria-label="Player Name"
                        aria-describedby="basic-addon1"
                        onChange={updatePlayerName}
                    />
                </InputGroup>
                <div className='button col-3' onClick={playerOneId} ><p>Find Player</p></div>
            </Col>

            <Col className='col-12 col-lg-4 offset-lg-4  input-container'>
                <InputGroup className="mb-3 mt-4 input">
                    <FormControl
                        placeholder={playerTwoName}
                        aria-label="Player Name"
                        aria-describedby="basic-addon1"
                        onChange={updateplayerTwo}
                    />
                </InputGroup>
                <div className='button col-3' onClick={playerTwoId} ><p>Find Player</p></div>
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
                            maintainAspectRatio: true,
                            plugins: {
                                decimation: {
                                    enabled: true,
                                },
                                title: {
                                    display: true,
                                    text: "Player stats",
                                    position: "bottom",
                                    color: "white",
                                    font: {
                                        size: 24,
                                        weight: "bold",

                                    }
                                },
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        display: true,
                                        padding: 30,
                                        boxWidth: 30,
                                        boxHeight: 20,
                                    }
                                }
                            },
                            indexAxis: 'y',
                            responsive: true,
                            animation: {
                                easing: 'easeInOutBounce',
                                duration: 1800,
                                numSteps: 2,
                            },
                            datasets: {
                                bar: {
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
                    <Radar data={radarData}
                        height={100}
                        options={{
                            responsive: true,
                            plugins: {
                                decimation: {
                                    enabled: true,
                                },
                                legend: {
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



