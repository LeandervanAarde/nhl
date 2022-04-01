import { useState, useEffect, useRef } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Scores.css';
import axios from 'axios';
import Scoreitem from './Scoreitem';

const Scores = () => {
    const [gameOne, setGameOne] =useState();
    const[finalScore, setFinalScore] = useState();

    useEffect(()=>{

        //API link
        axios.get('https://statsapi.web.nhl.com/api/v1/schedule')
        .then((result)=>{
            //data
            let data = result.data.dates[0].games;
            // console.log(data);
            const game1Arr = [];
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
                })
            }
            //set game one to a UseStae
            setGameOne(game1Arr);
            //Map the data
             const scoreOne = game1Arr.map((item) => <Scoreitem key={item.id} teamName ={item.teamName} score={item.score}></Scoreitem>);
             const scoreTwo = game1Arr.map((item) => <Scoreitem key={item.idAway} teamName ={item.teamNameAway} score={item.scoreAway}></Scoreitem>);
             //set the final score
             setFinalScore(scoreOne,scoreTwo)
        })
        
    }, [])
    console.log(finalScore);
    // console.log(score1); 
 

    return (
        <Row className='footer-row'>
            <Col className='col-6 scores'>
                <div className='circle '>

                </div>
            {/* Call the final score after the score Item has been added */}
              {finalScore}
                
                <div className='circle '>

                </div>

            </Col>

            

            <Col className='col-6 scores'>

                <div className='circle '>

                </div>

                <div className='text'><h3>0 </h3></div>
                <div className='text'><h3>0 </h3></div>

                <div className='circle '>

                </div>
            </Col>



        </Row>
    );
};

export default Scores;