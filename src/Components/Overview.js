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
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect, useRef } from "react";
import Topteams from './Topteams';
import Bargraph from './Bargraph';
import Doughnutgraph from './Doughnutgraph';


const Overview = () => {
    const [teamsList, setTeamslist] = useState([]);
    const[startData, setStartData] = useState();
    const[wins, setWins] =useState([]);
    const[names, setNames] =useState([]);
    
    useEffect(() => {
        axios.get("https://statsapi.web.nhl.com/api/v1/standings")
            .then((res) => {
                let data = res.data.records;
                let allTeams = [];
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < data[i].teamRecords.length; j++) {
                        allTeams.push({
                            id: data[i].teamRecords[j].team.id,
                            name: data[i].teamRecords[j].team.name,
                            wins: data[i].teamRecords[j].leagueRecord.wins,
                            losses: data[i].teamRecords[j].leagueRecord.losses,
                            rank: parseInt(data[i].teamRecords[j].leagueRank),
                            powerPlayRank: parseInt(data[i].teamRecords[j].ppLeagueRank),
                        });
                    }
                }
                allTeams.sort(function (x, y) {
                    return x.rank - y.rank;
                });

                allTeams.splice(10, (allTeams.length -10));
                console.log(allTeams);
                setTeamslist(allTeams); 
                let wins = allTeams.map((item)=> item.wins);
                let name = allTeams.map((item)=> item.name);
                setWins([wins]);
                setNames([name]);
            })
    }, []);
    
    const teamData = teamsList.map((item) => <Topteams key={item.id} name={item.name} wins={item.wins} losses={item.losses} rank={item.rank}  powerplay={item.powerPlayRank} />);
    const winsData = wins.map((item) => item);
    const barInfo = names.map((item) => <Bargraph name={item} wins={winsData[0]}/>);
 

    console.log(winsData);

    


    return (
        <Row className='overview-row'>
            <Col className='col-12 intro '>
                <h1> OVERVIEW</h1>
                <p className='text-center'>Here you can get an introduction to <strong>CHEL</strong> a list of the top 10 teams provided with some contextualized information on the top 2 performing teams in the league as it currently stands!</p>
            </Col>

            <Col className='col-12 col-md-5 teams mt-5 mb-5'>
                <h1>Top 10 teams in the NHL</h1>
                {teamData}
                
            </Col>

            <Col className='col-12 col-md-6 offset-md-1 mt-5 mb-5 graph'>
                {barInfo}
                
            </Col>
 
            <Col className='col-12 col-lg-5 mt-4 mb-5 graph'>
            <Doughnutgraph/>
            </Col>
        
            <Col className='col-12 col-lg-6 offset-1 mt-4 mb-5 graph'>
                
            </Col>

            <Col className='col-12 col-lg-6  mt-4 mb-5 graph'>
            
            </Col>

            <Col className='col-12 col-lg-5 offset-1 mt-4 mb-5 graph'>
            
            </Col>

        </Row>
        
    );
};

export default Overview;