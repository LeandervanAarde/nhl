import React from "react";
import { useState, useEffect, useRef } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../Teamcompare.css';
import axios from 'axios';
import Dropdownitem from "./SubComponents/Dropdownitem";
import Teamcards from "./SubComponents/Teamcards";
import PolarRadar from "./SubComponents/PolarRadar";
import logos from "../Logos";

let teamValues = [0,0,0,0,0,0,0,0,0,0,0,0];

const Teamcompare = () => {
    //set the list so it can be accessed outside
    const [teamList, setTeamList] = useState([]);
    //get the value of the input
    const teamOne = useRef();
    const teamTwo = useRef();
    const[team1Link, setTeam1Link] = useState(); 
    const[team2Link, setTeam2Link] = useState(); 
    const[team1, setTeam1] = useState(null);
    const[team1Card, setTeam1Card] = useState();
    const[team2, setTeam2] = useState(null);
    const[team2Card, setTean2Card] = useState();
    const [graphData, setGraphData] = useState();
    const [teamImage, setTeamImage] = useState();
    
    //use effect ensures that it will only run once
    useEffect(() => {
        //axios call
        axios.get('https://statsapi.web.nhl.com/api/v1/teams')
            .then((response) => {
                //variable so that it will get the data
                let teams = response.data.teams;
                // console.log(teams);
                // empty array to store the teams in
                const allTeams = [];
                // loop through data and push certain info to that array
                for (let i = 0; i < teams.length; i++) {
                    allTeams.push({
                        id: teams[i].id,
                        name: teams[i].teamName,
                        link:'https://statsapi.web.nhl.com/'+teams[i].link+'?expand=team.stats',
                    }); 
                }
                //set teams so they can be called outside useEffect
              setTeamList(allTeams);           
            })
    }, []);

    function getTeam(){
        let selected1 = teamOne.current.value;
        for (let j = 0; j < teamList.length; j++ ){
            if(selected1 === teamList[j].name){
                setTeam1Link(teamList[j].link);
            }
        }  
    }
    
    useEffect(() =>{
        axios.get(team1Link)
        .then((res)=>{
            let data = res.data.teams[0].teamStats[0].splits;
           console.log(data); 
 
           for(let i = 0; i < data.length; i++){
            let teamLogo;
            let teamAwayLogo;
            for(let i = 0; i < data.length; i++){
             for(let j = 0; j < logos["NHL_Logos"].length; j++){
                 if(logos["NHL_Logos"][j]["name"].includes(data[1].team.name)){
                     teamLogo = logos["NHL_Logos"][j]["url"];
                        console.log(teamLogo)
                        teamValues[5] = teamLogo;
                     break;
                 }
             }
 
            }
           }
           setTeam1Card(<Teamcards powerPlayGoals={data[1].stat.powerPlayGoals} losses={data[1].stat.losses} wins={data[1].stat.wins} name={data[1].team.name} logo={teamValues[5]} />);  
           teamValues[0] = data[0].stat.powerPlayGoals;
           teamValues[1] = data[0].stat.pts;
           teamValues[2] = data[0].stat.wins;
           teamValues[3] = data[0].stat.losses;
           teamValues[4] = data[1].team.name;
          
            setTeam1(<PolarRadar powerPlayGoals ={teamValues[0]} points={teamValues[1]} wins ={teamValues[2]} losses={teamValues[3]} name={teamValues[4]}  powerPlayGoals1 ={teamValues[7]} points1={teamValues[8]} wins1 ={teamValues[9]} losses1={teamValues[10]} name1={teamValues[11]}/>);
        }) 
 },[team1Link])

    function getTeam2(){
        let selected2 = teamTwo.current.value;
        for (let k = 0; k < teamList.length; k++ ){
            if(selected2 === teamList[k].name){
                setTeam2Link(teamList[k].link);

            }
        }
        console.log(selected2)
    }
    
    useEffect(() =>{
        axios.get(team2Link) 
        .then((res)=>{
            let data = res.data.teams[0].teamStats[0].splits;

            for(let i = 0; i < data.length; i++){

                let teamLogo;
                let teamAwayLogo;
                for(let i = 0; i < data.length; i++){
                 for(let j = 0; j < logos["NHL_Logos"].length; j++){
                     if(logos["NHL_Logos"][j]["name"].includes(data[1].team.name)){
                         teamAwayLogo = logos["NHL_Logos"][j]["url"];
                            console.log(teamLogo)
                            teamValues[6] = teamAwayLogo;
                         break;
                     }
                 }
     
                }
               }

            setTean2Card(<Teamcards logo={teamValues[6]} powerPlayGoals={data[1].stat.powerPlayGoals} losses={data[1].stat.losses} wins={data[1].stat.wins} name={data[1].team.name } />);
            teamValues[7] = data[0].stat.powerPlayGoals;
            teamValues[8] = data[0].stat.pts;
            teamValues[9] = data[0].stat.wins;
            teamValues[10] = data[0].stat.losses;
            teamValues[11] = data[1].team.name;
 
            setTeam1(<PolarRadar powerPlayGoals ={teamValues[0]} points={teamValues[1]} wins ={teamValues[2]} losses={teamValues[3]} name={teamValues[4]}  powerPlayGoals1 ={teamValues[7]} points1={teamValues[8]} wins1 ={teamValues[9]} losses1={teamValues[10]} name1={teamValues[11]}/>);
         }); 

 },[team2Link])
 
    return (
        <Row className='team-compare-row'>
            <Col className="col-12 text-center">
                <h2 className="context-h2 ms-3">COMPARE YOUR FAVORITE TEAMS</h2>
                <p> Pick two of your favorite teams that play in the NHL and compare to see who the better team is! </p>
                <br></br>
                <p>Our top 3 teams</p>
                <ul>
                    <li className="top-3">Washington Capitals</li>
                    <li className="top-3">Chicago Blackhawks</li>
                    <li className="top-3">Colorado Avalanche </li>
                </ul>
            </Col>

            <Col className='col-12 col-lg-4 input-container' id='input'>

            <select className='col-12 dropdown' ref={teamOne} onChange={getTeam}>
                    <option disabled={true} selected={true} > Select Team #1</option>
                    {teamList && teamList.map((item) =>
                        <Dropdownitem key={item.id} name={item.name} link={item.link} />
                    )}
             </select>

            </Col>

            <Col className='col-12 col-lg-4 offset-lg-4  input-container'>
            <select className='col-12 dropdown' ref={teamTwo} onChange={getTeam2}>
                    <option disabled={true} selected={true}> Select Team #2</option>
                    {teamList && teamList.map((item) =>
                        <Dropdownitem key={item.id} name={item.name} link={item.link} />
                    )}
             </select>
            </Col>

            <Col className=' col-6 col-lg-5 offset-lg-1 card-1 mt-5 '>
              {team1Card}
            </Col>

            <Col className=' col-6 col-lg-5 card-2 mt-5'>
               {team2Card}
            </Col>

            <Col className='col-12 chart-container chart-container-2 mt-5 mb-2'>
                <div className='polar-radar col-12'>
                 {team1} 
                </div>
            </Col>
        </Row>
    );
};

export default Teamcompare;