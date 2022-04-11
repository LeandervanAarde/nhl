import { useState, useEffect, useRef } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Scores.css';
import axios from 'axios';
import Scoreitem from './SubComponents/Scoreitem';
import logos from "../Logos";

const Scores = () => {
    const [gameOne, setGameOne] =useState();
    const[firstScore, setfirstScore] = useState([]);
    const[secondScore, setSecondScore] = useState([]);

    useEffect(()=>{

        //API link
        axios.get('https://statsapi.web.nhl.com/api/v1/schedule')
        .then((result)=>{
            //data
            let data = result.data.dates[0].games;
            
            // console.log(result)
            // console.log(data);
            const game1Arr = [];
            // console.log(data);
            let teamLogo;
            let teamAwayLogo;
            for(let i = 0; i < data.length; i++){
                for(let j = 0; j < logos["NHL_Logos"].length; j++){
                    // console.log("Hello");
                    if(logos["NHL_Logos"][j]["name"].includes(data[i].teams.home.team.name)){
                        teamLogo = logos["NHL_Logos"][j]["url"];
                       
                        break;
                    }
                    // console.log("home logo found");
                }
                for(let j = 0; j <logos["NHL_Logos"].length; j++){
                    if( logos["NHL_Logos"][j]["name"].includes(data[i].teams.away.team.name)){
                        teamAwayLogo = logos["NHL_Logos"][j]["url"];
                       
                        break;

                    }
                    // console.log("Away logo found");
                }
               game1Arr.push({
                   //push home and away teams to the game1 array in order to get both scores
                    id: data[i].teams.home.team.id,
                    teamName: data[i].teams.home.team.name,
                    score: data[i].teams.home.score,
                    idAway: data[i].teams.away.team.id,
                    teamNameAway: data[i].teams.away.team.name,
                    scoreAway: data[i].teams.away.score,
                    Logo: teamLogo,
                    logoAway: teamAwayLogo
                });
            }
            //set game one to a UseStae
            setGameOne(game1Arr);
            //Map the data
             const scoreOne = game1Arr.map((item) => <Scoreitem key={item.id} teamName ={item.teamName} score={item.score} teamNameAway = {item.teamNameAway} scoreAway={item.scoreAway} logoOne = {item.Logo} logoTwo = {item.logoAway}></Scoreitem>);
             const scoreTwo = game1Arr.map((item) => <Scoreitem key={item.id} teamName ={item.teamName} score={item.score} teamNameAway = {item.teamNameAway} scoreAway={item.scoreAway} logoOne = {item.Logo} logoTwo = {item.logoAway}></Scoreitem>);
             //set the final score
             setfirstScore(scoreOne);
             setSecondScore(scoreTwo);
        })    
    }, [])
    // console.log(gameOne);
    console.log(firstScore);
    console.log(secondScore);
    return (
        <Row className='footer-row'>
            <Col className="col-12 text-center context-h2"> <h3>Recent Scores</h3></Col>
            <Col className='col-6 scores'>
            {/* Call the final score after the score Item has been added */}
              {firstScore [0]}
            </Col>

            <Col className='col-6 scores'>
                {secondScore [1]}
            </Col>
        </Row>
    );
};

export default Scores;