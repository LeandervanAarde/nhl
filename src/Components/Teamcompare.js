import React from "react";
import { useState, useEffect, useRef } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../Teamcompare.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import { PolarArea } from "react-chartjs-2";
//render function
const Teamcompare = () => {

    // let Id = 2; 
    // axios.get('https://statsapi.web.nhl.com/api/v1/teams/'+Id+'/?expand=team.stats')
    // .then((res) =>{
    //     console.log(res);
    // },[])
    //set the list so it can be accessed outside
    const [teamList, setTeamList] = useState([]);
    //get the value of the input
    const linkValue = useRef();
//use effect ensures that it will only run once
    useEffect(() => {
//axios call
        axios.get('https://statsapi.web.nhl.com/api/v1/teams')
            .then((response) => {
                //variable so that it will get the data
                let teams = response.data.teams;
                // console.log(teams);
                // empty array to store the teams in
                let allTeams = [];
                // loop through data and push certain info to that array
                for (let i = 0; i < teams.length; i++) {

                    allTeams.push({
                        id: teams[i].id,
                        name: teams[i].teamName,
                        link: teams[i].link,
                    });
                }
                // console.log(allTeams);
                // set the all teams to an array that can now be called outside

                setTeamList(allTeams);

            })
           

    }, [])
    
    console.log(teamList);




    const polarData = {
        labels: ["Team1 Wins", "Team2 Wins", "Team2 Losses", "Team2 OT Losses", "Team1 OT Losses", "Team2 OT Losses", "Team1 Stanely Cups", "Team2 Stanely Cups"],

        datasets: [
            {
                data: [
                    55,
                    24,
                    12,
                    14,
                    34,
                    48,
                    144,
                    125,
                ],

                backgroundColor: [" rgb(200 ,16, 46)", "rgb(30, 30, 148)"],
                borderColor: "transparent",
            }
        ],

    };


    // function getTeam(){
    //     let value = linkValue.value;
    //     for(let i= 0; teamList.length; i++){

    //         if(value === teamList[i].name){
    //             console.log(teamList)

    //         }
    //     }

    // }

    // onChange={getTeam}

    return (
        <Row className='team-compare-row'>

            <Col className='col-12 col-lg-4 input-container' id='input'>

                <InputGroup className="mb-3 mt-4 input" ref={linkValue}>
                    <FormControl
                        placeholder="Team Name"
                        aria-label="Team Name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

            </Col>

            <Col className='col-12 col-lg-4 offset-lg-4  input-container'>
                <InputGroup className="mb-3 mt-4 input">
                    <FormControl
                        placeholder="Team Name"
                        aria-label="Team Name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

            </Col>


            <Col className=' col-6 col-lg-5 card-1 '>
                {/* {Showplayer1}  */}

            </Col>

            <Col className=' col-6 col-lg-5 card-2 '>
                {/* {Showplayer2}  */}
            </Col>

            <Col className='col-12 chart-container chart-container-2 mt-5 mb-2'>
                <div className='polar-radar col-10 offset-1  '>
                    <PolarArea data={polarData}

                        height={100} width={100}

                        options={{
                            maintainAspectRatio: true,
                            animation: {
                                animateRotate: false,
                                animateScale: true,
                                easing: "linear",
                                duration: 2000,

                            },
                            scales: {
                                r: {
                                    pointLabels: {
                                        display: true,
                                        centerPointLabels: true,
                                        font: {
                                            size: 24
                                        }
                                    }
                                }
                            },

                            plugins: {
                                legend: {
                                    display: true,
                                    position: "top",

                                }

                            },

                            legend: {
                                font: {
                                    size: 18,
                                    weight: "bold",

                                }
                            },
                        }}

                    />
                </div>
            </Col>

        </Row>
    );
};

export default Teamcompare;