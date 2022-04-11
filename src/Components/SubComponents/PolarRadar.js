import React from 'react';
import 'chart.js/auto';
import { PolarArea } from "react-chartjs-2";

const PolarRadar = (props) => {
    return (
    <>
     <PolarArea data={{
     labels: [ props.name+" Power Play Goals", props.name+" Wins", props.name+" Losses", props.name+" Points", props.name1+ " Power Play Goals", props.name1+" Wins",  props.name1+" Losses",  props.name1+" Points"],

     datasets: [
         {
             data: [
                props.powerPlayGoals,
                props.wins,
                props.losses,
                props.points,
                
                props.powerPlayGoals1, 
                props.wins1,
                props.losses1,
                props.points1,
             ],

             backgroundColor: [" rgba(200 ,16, 46, 1)", "rgb(146, 7, 31", " rgb(115, 0, 19)", "rgb(85, 2, 16)", "rgba(30, 30, 148, 0.70)", "rgba(17, 17, 108, 0.7)", "rgba(0, 0, 168, 0.7)", "rgba(1, 1, 77, 0.7)" ],
             borderColor: "transparent",
         }
     ],
    }}

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
            display: false,
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
    </>
    );
};

export default PolarRadar;