import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../Overview.css';
import axios from 'axios';
import 'chart.js/auto';
import { useState, useEffect} from "react";
import Topteams from './SubComponents/Topteams';
import Bargraph from './SubComponents/Bargraph';
import Doughnutgraph from './SubComponents/Doughnutgraph';


const Overview = () => {
    const [teamsList, setTeamslist] = useState([]);
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
   let topTwoTeams = teamsList.map((item) => <Doughnutgraph id={item.id} name={item.name} wins={item.wins} losses={item.losses}/>);


  

  

    return (
        <Row className='overview-row'>
            <Col className='col-12 intro '>
                <h1> OVERVIEW</h1>
                <p className='text-center'>Here you can get an introduction to <strong>CHEL</strong> a list of the top 10 teams provided with some contextualized information on the top 2 performing teams in the league as it currently stands!</p>
            </Col>

           
           <Col className='col-12 team-container'>

           <h1 className='text-center mt-3'>Top 10 teams in the NHL</h1>
                {teamData}
           </Col>
              
                
            

            <Col className='col-12 mt-5 mb-5 graph'>
                {barInfo}
                
            </Col>
            <Col className="col-12 text-center mb-2 mt-2">
                <h2 className="context-h2 ms-3">Top 2 Teams in the NHL</h2>
            </Col>
            <Col className='col-6 col-lg-5 mt-4 mb-5 graph '>
            {topTwoTeams[0]}
            </Col>
        
            

            <Col className='col-6 col-lg-5 mt-4 mb-5 offset-lg-2 graph'>
            {topTwoTeams[1]}
            </Col>

        </Row>
        
    );
};

export default Overview;