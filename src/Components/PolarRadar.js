import React from 'react';
import 'chart.js/auto';
import { PolarArea } from "react-chartjs-2";

const PolarRadar = (props) => {
    return (
    <>
     <PolarArea data={{
     labels: [ "PowerPlay Goals", "PowerPlayGoalsTwo"],

     datasets: [
         {
             data: [
                props.powerPlayGoals,  props.powerPlayGoals2,
               
             ],

             backgroundColor: [" rgba(200 ,16, 46, 0.3)"],
             backgroundColor: [ "rgba(30, 30, 148, 0.3)"],
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