import React from 'react';
import 'chart.js/auto';
import { Doughnut} from 'react-chartjs-2';


const Doughnutgraph = (props) => {
    return (
        <Doughnut data ={{


            labels:["Wins", "Losses",],
            datasets: [{
                label: "hotter totter",
                data: [props.wins, props.losses],
                backgroundColor: ["rgb(30, 30, 148)", "rgb(200 ,16, 46)"],
            }],      
            borderwidth: 0

        }} height={260} options ={{
            responsive: false,
            maintainAspectRatio: true,
            plugins: {
                decimation: {
                    enabled: true,
                },
                title: {
                    display: true,
                    text: props.name + " Wins vs losses ",
                    position: "bottom",
                    color: "white",
                    font: {
                        size: 24,
                        weight: "bold",

                    }
                },
                legend: {
                    position: "top",
                    label: {
                        display: false,
                        padding: 30,
                        boxWidth: 30,
                        boxHeight: 20,
                    }
                }
            },
            responsive: true,
            animation: {
                easing: 'easeInOutBounce',
                duration: 1800,
                numSteps: 2,
            },
           
        }}/>
    );
};

export default Doughnutgraph;