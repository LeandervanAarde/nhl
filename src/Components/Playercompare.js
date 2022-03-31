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
    //  GO TO LINE #314
    // let axiosurl= 'https://statsapi.web.nhl.com/api/v1/people/' +id; 
    const [playerOneName, setPlayerOneName] = useState("Choose player name");
    const [playerTwoName, setPlayerTwoName] = useState("Choose player name");
    const [playerName, setPlayerName] = useState();
    const [playerOnenr, setPlayerOnenr] = useState();
    const [playerNameTwo, setPlayerNameTwo] = useState();
    const [playerTwonr, setPlayerTwonr] = useState();
    const [playerOneStatistics, setPlayerOneStatistics] = useState([]);
    const [playerTwoStatistics, setPlayerTwoStatistics] = useState([]);
    const [apiLink, setApiLink] = useState();
    const [apiLinkTwo, setApiLinkTwo] = useState();
    const inputVal = useRef();
    const inputVal2 = useRef();
    const [dummyDataBar, setDummyDataBar] = useState(
        {
            labels: ['Shots', 'Goals', 'Penalties', 'TOI', 'hits'],
            datasets: [
                {
    
                    label: "hey",
                    data: [0,0,0,0,0],
                    backgroundColor: [" rgb(200 ,16, 46)"],
                },
                {
                    label: "hey",
                    data: [0,0,0,0,0],
                    backgroundColor: ["rgb(30, 30, 148)"],
                },
    
            ],
    
        }

    );


    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != document.getElementById("input1")) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    const updatePlayerName = (event) => {
        let a, b, val = event.currentTarget.value;
        closeAllLists();
        a = document.createElement("DIV");
        a.setAttribute("id", "input1" + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        document.getElementById("input").appendChild(a);
        for (let i = 0; i < players.length; i++) {
            if (players[i].name.toUpperCase().includes(val.toUpperCase())) {
                b = document.createElement("DIV");
                b.setAttribute("data-id", i);
                let pos1 = players[i].name.toUpperCase().indexOf(val.toUpperCase());
                b.innerHTML = players[i].name.substr(0, pos1);
                b.innerHTML += "<strong>" + players[i].name.substr(pos1, val.length) + "</strong>";
                b.innerHTML += players[i].name.substr(pos1 + val.length);
                a.appendChild(b);
                b.addEventListener("click", function (e) {
                    inputVal.current.value = e.target.innerText;
                    setPlayerName(inputVal.current.value);
                    closeAllLists();
                });

            }
        }
    };

    function playerOneId() {

        for (let i = 0; i < players.length; i++) {
            if (playerName === players[i].name) {
                let idOne = players[i].id;

                setPlayerOnenr(idOne);
                setApiLink('https://statsapi.web.nhl.com/api/v1/people/' + idOne + '/stats?stats=yearByYear', 0); 

            }

        }
       
    }
       function closeAllLists2(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != document.getElementById("input2")) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    // console.log(apiLink);


    useEffect((index) => {

        axios.get(apiLink)
            .then((response) => {
                let data = response.data.stats[0].splits;

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

                let goalArr = [];
                let shotArr = [];
                let assArr = [];
                let penArr = [];
                let HitArr = [];

                for (let j = 0; j < playerOnestats.length; j++) {

                    const goals = playerOnestats[j].goals;
                    goalArr.push(goals);

                    const assist = playerOnestats[j].assists;
                    assArr.push(assist);

                    const shot = playerOnestats[j].shots;
                    shotArr.push(shot);

                    const penalties = playerOnestats[j].penaltyMinutes;
                    penArr.push(penalties);

                    const hits = playerOnestats[j].hits;
                    HitArr.push(hits);
                }

                const goalSuM = goalArr.reduce((x, y) => x + y);
                const assSum = assArr.reduce((x, y) => x + y);
                const shotSum = shotArr.reduce((x, y) => x + y);
                const penSum = penArr.reduce((x, y) => x + y);
                const hitSum = HitArr.reduce((x, y) => x + y);

                setPlayerOneStatistics({
                    goals: goalSuM,
                    assists: assSum,
                    shots: shotSum,
                    penaltyMin: penSum,
                    hits: hitSum,
                }, index);

            })

    }, [apiLink])

    // console.log(playerOneStatistics);




    const updatePlayerTwo = (event) => {
        let a, b, val = event.currentTarget.value; 
        closeAllLists2();
        a = document.createElement("DIV");
        a.setAttribute("id", "input2" + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
     
        document.getElementById("input-2").appendChild(a);
        for(let i = 0; i < players.length; i++){
            if(players[i].name.toUpperCase().includes(val.toUpperCase())){
                b = document.createElement("DIV");
                        b.setAttribute("data-id", i);
                        let pos1 = players[i].name.toUpperCase().indexOf(val.toUpperCase());
                        b.innerHTML = players[i].name.substr(0, pos1);
                        b.innerHTML += "<strong>" + players[i].name.substr(pos1, val.length) + "</strong>";
                        b.innerHTML += players[i].name.substr(pos1 + val.length);
                    a.appendChild(b); 

                    b.addEventListener("click", function(e) {
                       inputVal2.current.value = e.target.innerText;
                       setPlayerNameTwo(inputVal2.current.value);

                        closeAllLists2();
                    });
                
            }
        }
    };

    
    

    function playerTwoId() {

        for (let i = 0; i < players.length; i++) {
            if (playerNameTwo === players[i].name) {
                let idTwo = players[i].id;
                setPlayerTwonr(players[i].id);
                setApiLinkTwo('https://statsapi.web.nhl.com/api/v1/people/' + idTwo + '/stats?stats=yearByYear', 1); 
              
            }
        }
    
    }
    // console.log(apiLinkTwo);

    //sdc

    useEffect((index) => {
       
        axios.get(apiLinkTwo)
            .then((response) => {
                let data = response.data.stats[0].splits;

                const playerTwostats = [];

                for (let i = 0; i < data.length; i++) {
                    if (data[i].league.name === 'National Hockey League') {
                        playerTwostats.push({
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

                let goalArr = [];
                let shotArr = [];
                let assArr = [];
                let penArr = [];
                let HitArr = [];

                for (let j = 0; j <  playerTwostats.length; j++) {

                    const goals =  playerTwostats[j].goals;
                    goalArr.push(goals);

                    const assist =  playerTwostats[j].assists;
                    assArr.push(assist);

                    const shot =  playerTwostats[j].shots;
                    shotArr.push(shot);

                    const penalties =  playerTwostats[j].penaltyMinutes;
                    penArr.push(penalties);

                    const hits =  playerTwostats[j].hits;
                    HitArr.push(hits);
                }

                const goalSuM = goalArr.reduce((x, y) => x + y);
                const assSum = assArr.reduce((x, y) => x + y);
                const shotSum = shotArr.reduce((x, y) => x + y);
                const penSum = penArr.reduce((x, y) => x + y);
                const hitSum = HitArr.reduce((x, y) => x + y);

                setPlayerTwoStatistics({
                    goals: goalSuM,
                    assists: assSum,
                    shots: shotSum,
                    penaltyMin: penSum,
                    hits: hitSum,
                },  index);

            })

           
    }, [apiLinkTwo])


    // sdc

    console.log(playerOneStatistics);



//ASK LEO
//
///
//

///
    function createGraph(data, index) {

        let tmpBar = playerTwoStatistics;
        let tmpBar2 = playerOneStatistics;
        let datasetZero = (Object.values(tmpBar));
        let datasetOne = (Object.values(tmpBar2));
        console.log(datasetOne)

        const dataBar = {

            labels: ['Goals', 'Assists', 'Shots', 'penaltyMin', 'Hits'],
            datasets: [
                {

                    label: "hey",
                    data: datasetZero,
                    backgroundColor: [" rgb(200 ,16, 46)"],
                },
                {
                    label: "hey",
                    data: datasetOne,
                    backgroundColor: ["rgb(30, 30, 148)"],
                },

            ],




        };

        setDummyDataBar(dataBar);
    }

    

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
                <InputGroup className="mb-3 mt-4 input" id='input1'>
                    <FormControl ref={inputVal}
                        placeholder={playerOneName}
                        aria-label="Player Name"
                        aria-describedby="basic-addon1"
                        onChange={updatePlayerName}
                    />
                </InputGroup>
                <div className='button col-3' onClick={playerOneId} ><p>Find Player</p></div>
            </Col>

            <Col className='col-12 col-lg-4 offset-lg-4  input-container' id='input-2'>
                <InputGroup className="mb-3 mt-4 input" id='input2'>
                    <FormControl ref={inputVal2}
                        placeholder={playerTwoName}
                        aria-label="Player Name"
                        aria-describedby="basic-addon1"
                        onChange={updatePlayerTwo}
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
                    <Bar data={dummyDataBar}
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