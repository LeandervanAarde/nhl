import React from 'react';
import Col from 'react-bootstrap/Col';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect, useRef } from "react";


const Topteams = (props) => {

    return (
        <Col className='col-12 info'>
                
            <div className='team info'>
                <h3 className='team-name'> Team : <b>{props.name}</b> </h3> 
                <p key={props.id}> League Rank: {props.rank}</p> 
                <p> Team Wins: {props.wins} </p> 
                <p> Team Losses: {props.losses} </p> 
             </div>
            <hr className='hr'></hr>
        </Col>
    );
};
//    const teamData = teamsList.map((item) => <Topteams key={item.id} name={item.name} wins={item.wins}  losses={item.losses} rank={item.rank} powerplay={item. powerPlayRank} />);


export default Topteams;