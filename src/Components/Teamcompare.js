import React from "react";
import { useState, useEffect, useRef } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../Teamcompare.css';
import axios from 'axios';
import { PolarArea } from "react-chartjs-2";
import Playercard from "./Playercard";
import Dropdownitem from "./Dropdownitem";
import Teamcards from "./Teamcards";
import PolarRadar from "./PolarRadar";
//render function
const showTeam1 ="";
const Teamcompare = () => {
    //set the list so it can be accessed outside
    const [teamList, setTeamList] = useState([]);
    //get the value of the input
    const linkValue = useRef();
    const teamOne = useRef();
    const teamTwo = useRef();
    const[team1Link, setTeam1Link] = useState(); 
    const[team2Link, setTeam2Link] = useState(); 
    const[team1, setTeam1] = useState(null);
    const[team1Card, setTeam1Card] = useState();
    const[team2, setTeam2] = useState(null);
    const[team2Card, setTean2Card] = useState();
    const [graphData, setGraphData] = useState();
    
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
           setTeam1(<PolarRadar powerPlayGoals ={data[0].stat.powerPlayGoals} points={data[0].stat.pts} wins ={data[0].stat.wins} losses={data[0].stat.losses} />);
           setTeam1Card(<Teamcards powerPlayGoals={data[1].stat.powerPlayGoals} losses={data[1].stat.losses} wins={data[1].stat.wins} name={data[1].team.name} />);       
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
            setTeam2(<PolarRadar powerPlayGoalsTwo={data[0].stat.powerPlayGoals} points={data[0].stat.pts} wins ={data[0].stat.wins} losses={data[0].stat.losses} />);
            setTean2Card(<Teamcards powerPlayGoals={data[1].stat.powerPlayGoals} losses={data[1].stat.losses} wins={data[1].stat.wins} name={data[1].team.name} />);
        }); 
        setGraphData(team1, team2);
 },[team2Link])
 
 console.log(team1);
 console.log(team2);

 console.log(graphData);



 
  

    return (
        <Row className='team-compare-row'>

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
                    <option disabled={true} selected={true} > Select Team #2</option>
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
                <div className='polar-radar col-10 offset-1  '>
                 {graphData}
                
                </div>
            </Col>

        </Row>
    );
};

export default Teamcompare;