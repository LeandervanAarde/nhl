import { useState, useEffect, useRef } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Scores.css';
import axios from 'axios';
import scoreItem from './scoreItem';

const Scores = () => {
    const [homeTeam1, setHomeTeam1] = useState();
    const [awayTeam1, setAwayTeam1] = useState();

    useEffect(()=>{
        axios.get('https://statsapi.web.nhl.com/api/v1/schedule')
        .then((result)=>{
            let data = result.data.dates[0].games;
            // console.log(data);
            const team1Arr = [];
            const team2Arr = [];

            // console.log(data);
            for(let i = 0; i < data.length; i++){
                team1Arr.push({
                    id: data[i].teams.home.team.id,
                    teamName: data[i].teams.home.team.name,
                    score: data[i].teams.home.score,
                })

                team2Arr.push({
                    id: data[i].teams.away.team.id,
                    teamName: data[i].teams.away.team.name,
                    score: data[i].teams.away.score,
                })
            }

            console.log(team1Arr);
            console.log(team2Arr);
            setHomeTeam1(team1Arr);
            setAwayTeam1(team2Arr);

        })
            // const teams1 = homeTeam1.map((items) => <scoreItem key={items.id} teamName ={items.teamName} score={items.score}></scoreItem>);
            // const teams2 = awayTeam1.map((items2) => <scoreItem key2={items2.id} teamName2={items2.teamName} score2={items2.score}></scoreItem>);
    }, [])

    return (
        <Row className='footer-row'>
            <Col className='col-6 scores'>
                <div className='circle '>

                </div>

                <div className='text'><h3>0 </h3></div>
                <div className='text'><h3>0 </h3></div>
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