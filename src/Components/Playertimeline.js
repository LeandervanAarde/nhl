import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../Playertimeline.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import players from '../Players.js';
import { useState, useEffect, useRef } from "react";
import Dropdownitem from "./SubComponents/Dropdownitem";


const Playertimeline = () => {
    const inputVal = useRef();
    const [playerName, setPlayerName] = useState();
    const [playerOneName, setPlayerOneName] = useState("Choose player name");
    const [apiLink, setApiLink] = useState();
    const [playerOnenr, setPlayerOnenr] = useState();
    const [playerStatistics, setPlayerStatistics] = useState([]);
    const dropVal = useRef();
    const dropYear = useRef();
    const [stats, setStats] = useState([]);
    const [lineData, setLineData] = useState(
        {

            labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
            datasets: [
                {
                    label: "stat one",
                    data: [0,0,0,0,0],
                    backgroundColor: ["rgb(200 ,16, 46)"],
                },
            ],
            borderwidth: 1
    
        }
    )

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != document.getElementById("input3")) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    const updatePlayerName = (event) => {
        let a, b, val = event.currentTarget.value;
        closeAllLists();
        a = document.createElement("DIV");
        a.setAttribute("id", "input3" + "autocomplete-list");
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
                setApiLink('https://statsapi.web.nhl.com/api/v1/people/' + idOne + '/stats?stats=yearByYear');

            }

        }

    }

    useEffect((index) => {

        axios.get(apiLink)
            .then((response) => {
                let data = response.data.stats[0].splits;
                const playerStats = [];
           
                for (let i = 0; i < data.length; i++) {
                    if (data[i].league.name === 'National Hockey League') {
                        playerStats.push({
                            season: data[i].season.substr(0,4)+" / "+ data[i].season.substr(4,8),
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
                setPlayerStatistics(playerStats);
            })
    }, [apiLink]);

    function displayData(){
        let inptVal = dropVal.current.value;
        let inputYear = dropYear.current.value; 
        let startYear;
        let intYear = startYear +5;
        let seasons;
        let yearSeperate = Number(inputYear.substr(0,4));
        if(yearSeperate > Number(playerStatistics[playerStatistics.length-5].season.substr(0,4))){
            inputYear = playerStatistics[playerStatistics.length-5].season;
            yearSeperate = Number(inputYear.substr(0,4));
        }
        console.log(inputYear)
        console.log("the year is " + yearSeperate);
        let splitYear= [yearSeperate+" / "+ (yearSeperate+1), yearSeperate+1+" / "+ (yearSeperate+2), yearSeperate+2+" / "+ (yearSeperate+3), yearSeperate+3+" / "+ (yearSeperate+4), yearSeperate+4+" / "+ (yearSeperate+5)];
        for(let i =0; i< playerStatistics.length; i++){
            if(inputYear === playerStatistics[i].season){
                startYear = i;
                intYear = startYear+5;
                console.log(intYear);
                seasons = startYear[i] +5;
            }
        }
        let singleStatArr = [];

        for(let k = startYear; k < intYear; k++ ){
            if(inptVal === "Goals"){
                // console.log(playerStatistics[k].goals);
                singleStatArr.push(
                    playerStatistics[k].goals,
                );
            }  else if (inptVal === "Assists"){
                // console.log(playerStatistics[k].goals);
                singleStatArr.push(
                  playerStatistics[k].assists,
                );
            } else if (inptVal === "Shots"){
                // console.log(playerStatistics[k].shots);
                singleStatArr.push(
                   playerStatistics[k].shots,
                );
            } else if (inptVal === "Points"){
                // console.log(playerStatistics[k].points);
                singleStatArr.push(
                    playerStatistics[k].points,
                );
            }
        }
          setStats(singleStatArr);

          setLineData(
            {
                labels: splitYear,
                datasets: [
                    {
                        label: "     "+ inptVal,
                        data: singleStatArr,
                        backgroundColor: ["rgb(200 ,16, 46)"],
                    },
                ],
                borderwidth: 1
            }
        )
    }    

    return (
        <Row className='timeline-row'>

            <Col className="col-12 text-center">
                <h2 className="context-h2 ms-3">VIEW PLAYER PERFORMANCE</h2>
                <p> Pick a player in the NHL, their stat and the year you would like the stats to start at and see how players have been performing over 5 years from the start date, see when players peak/drop or gained to most of their stats </p>
                <br></br>
                <p>Our top 3 players</p>
                <ul>
                    <li className="top-3">Alexander Ovechkin</li>
                    <li className="top-3">Patrick Kane</li>
                    <li className="top-3">Joe Thorton</li>
                </ul>
            </Col>

            <Col className='col-11 col-lg-4 input-container ms-5' id='input'>

                <InputGroup className="mb-3 mt-4 input" id='input1'>
                    <FormControl ref={inputVal}
                        placeholder={playerOneName}
                        aria-label="Player Name"
                        aria-describedby="basic-addon1"
                        onChange={updatePlayerName}
                    />
                </InputGroup>
            </Col>

            <Col className='col-12 col-lg-3 mt-3 input-container '>
                <select className='col-12 dropdown'  
                    onChange={() =>{{}
                    playerOneId();
                    displayData();
                }}
                ref={dropVal}>
                    <option disabled={true} defaultValue={true} selected={true} > Select Player stat</option>
                    <option value="Goals" >Goals</option>
                    <option value="Assists" >Assists</option>
                    <option value="Shots" >Shots</option>
                    <option value="Points" >Points</option>
                </select>

            </Col>

            <Col className='col-12 col-lg-4 mt-3 offset input-container'>
                <select className='col-12 dropdown' ref={dropYear} onChange={displayData}>
                    <option disabled={true} selected={true} > Select start Season</option>
                    {playerStatistics && playerStatistics.map((item) =>
                        <Dropdownitem name={item.season} />
                    )}
                </select>
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