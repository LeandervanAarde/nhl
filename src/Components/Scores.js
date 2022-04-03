import { useState, useEffect, useRef } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Scores.css';
import axios from 'axios';
import Scoreitem from './Scoreitem';

const Scores = () => {
    const [gameOne, setGameOne] =useState();
    const[homeScore, setHomeScore] = useState([]);
    const[awayScore, setAwayScore]= useState([]);
    const [gameTwo, setGameTwo] =useState();
    const[homeScoreTwo, setHomeTwoScore] = useState([]);
    const[awayScoreTwo, setAwayTwoScore]= useState([]);
    useEffect(()=>{

        //API link
        axios.get('https://statsapi.web.nhl.com/api/v1/schedule', 'https://parsehub.com/api/v2/projects/tuVt2t2ZWQQ8/last_ready_run/data?api_key=toETzo8u5X5b')
        .then((result)=>{
            //data
            let data = result.data.dates[0].games;
            let data2 = result;
            // console.log(result)
            // console.log(data);
            const game1Arr = [];
            const game2Arr = [];
            // console.log(data);
            for(let i = 0; i < data.length; i++){
               game1Arr.push({
                   //push home and away teams to the game1 array in order to get both scores
                    id: data[i].teams.home.team.id,
                    teamName: data[i].teams.home.team.name,
                    score: data[i].teams.home.score,
                    idAway: data[i].teams.away.team.id,
                    teamNameAway: data[i].teams.away.team.name,
                    scoreAway: data[i].teams.away.score,
                });

                game2Arr.push({
                    //push home and away teams to the game1 array in order to get both scores
                     id: data[i].teams.home.team.id,
                     teamName: data[i].teams.home.team.name,
                     score: data[i].teams.home.score,
                     idAway: data[i].teams.away.team.id,
                     teamNameAway: data[i].teams.away.team.name,
                     scoreAway: data[i].teams.away.score,
                 })
            }
            //set game one to a UseStae
            setGameOne(game1Arr);
            setGameTwo(game2Arr);
            //Map the data
             const scoreOne = game1Arr.map((item) => <Scoreitem key={item.id} teamName ={item.teamName} score={item.score}></Scoreitem>);
             const scoreTwo = game1Arr.map((item) => <Scoreitem key={item.idAway} teamName ={item.teamNameAway} score={item.scoreAway}></Scoreitem>);

             const scoreThree = game2Arr.map((item) => <Scoreitem key={item.id} teamName ={item.teamName} score={item.score}></Scoreitem>);
             const scoreFour = game2Arr.map((item) => <Scoreitem key={item.idAway} teamName ={item.teamNameAway} score={item.scoreAway}></Scoreitem>);

             //set the final score
             setHomeScore(scoreOne);
             setAwayScore(scoreTwo);

             setHomeTwoScore(scoreThree);
             setAwayTwoScore(scoreFour);

            //  console.log(game1Arr);

        })

        
    }, [])
 
 

    return (
        <Row className='footer-row'>
            <Col className='col-6 scores'>
                <div className='circle '>

                </div>
            {/* Call the final score after the score Item has been added */}
              {homeScore [1]}
              
              {awayScore [1]}
                
                <div className='circle '>

                </div>

            </Col>

            

            <Col className='col-6 scores'>

                <div className='circle '>

                </div>

                {homeScoreTwo [2]}
                {awayScoreTwo [2]}
                <div className='circle '>

                </div>
            </Col>



        </Row>
    );
};

export default Scores;