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
import players from '../Players.js';
import { useState, useEffect, useRef } from "react";



const Playertimeline = () => {
    const inputVal = useRef();
    const [playerName, setPlayerName] = useState();
    const [playerOneName, setPlayerOneName] = useState("Choose player name");
    const [apiLink, setApiLink] = useState();
    const [playerOnenr, setPlayerOnenr] = useState();
    const [playerOneStatistics, setPlayerOneStatistics] = useState([]);
    const dropVal = useRef();


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
                let hitArr = [];

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
                    hitArr.push(hits);
                }

                setPlayerOneStatistics({
                    goals: goalArr,
                    assists: assArr,
                    shots: shotArr,
                    penaltyMin: penArr,
                    hits: hitArr,
                }, index);

            })

    }, [apiLink]);




    // console.log(playerOneStatistics)
    

    function displayData(){
        let inptVal = dropVal.current.value;
        if(inptVal === "Goals"){
            console.log(playerOneStatistics.goals)
            document.getElementById("stat-drop").innerHTML(inptVal);
            console.log("fired");

        }
    }


    const lineData = {

        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
            {

                label: "stat one",
                data: [0,0,0,0],
                backgroundColor: ["rgb(200 ,16, 46)"],


            },
        ],
        borderwidth: 1

    };


    return (
        <Row className='timeline-row'>
            <Col className='col-12 col-lg-4 input-container ms-5' id='input'>

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

            <Col className='col-12 col-lg-3 input-container '>

                <DropdownButton id="dropdown-custom" title="Player Statistic #1" menuVariant="dark" className="mb-3 mt-4 col-12 input drop">
                    <Dropdown.Header className='dropdown-head drowpdown' id='stat-drop' onChange={displayData} ref={dropVal}>Choose player statistic #1 </Dropdown.Header>
                    <Dropdown.Item href="#/action-2" >Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" >Shots</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" >Assists Pct</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" >Penalty Minutes</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" >hits</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" >Points</Dropdown.Item>
                </DropdownButton>

            </Col>

            <Col className='col-12 col-lg-4 offset input-container'>
                <DropdownButton id="dropdown-custom" title="Player Statistic #1" menuVariant="dark" className="mb-3 mt-4 col-12 input drop">
                    <Dropdown.Header className='dropdown-head drowpdown' ref={dropVal}>Choose player statistic #1 </Dropdown.Header>
                    <Dropdown.Item href="#/action-2" >YEAR</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" >YEAR</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" >YEAR </Dropdown.Item>
                    <Dropdown.Item href="#/action-1" >YEAR </Dropdown.Item>
                    <Dropdown.Item href="#/action-1" >YEAR</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" >YEAR</Dropdown.Item>
                </DropdownButton>

            </Col>


            <Col className='col-12 chart-container mt-5 mb-5'>
                <div className='timeline col-12 mb-2'>
                    <Line data={lineData}

                        options={{

                            elements: {
                                line: {
                                    borderWidth: 9,
                                    borderColor: ["rgb(200 ,16, 46)", "rgb(30, 30, 148)", "rgb(95, 3, 114)", "rgb(197, 197, 197)"],
                                }
                            },
                            maintainAspectRatio: false,

                            plugins: {
                                decimation: {
                                    enabled: true,
                                },

                                legend: {
                                    position: "bottom",
                                    labels: {

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