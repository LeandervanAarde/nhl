import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
const Bargraph = (props) => {  
     
    return (
   <>
  <Bar data ={{


            labels: props.name,
            datasets: [{
                label: "hotter totter",
                data: props.wins,
                backgroundColor: [" rgba(200 ,16, 46, 0.60)","rgba(240, 62, 65, 0.7)","rgba(30, 30, 148, 0.70)","rgba(169, 169, 169, 0.7)", "rgba(56, 0, 84, 0.7)" ],

                BorderColor: 'black',

            }],      
            borderwidth: 1

        }} height={350} options ={{
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                decimation: {
                    enabled: true,
                },
                title: {
                    display: true,
                    text: "Top 10 Teams Wins",
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
            indexAxis: 'y',
            responsive: true,
            animation: {
                easing: 'easeInOutBounce',
                duration: 1800,
                numSteps: 2,
            },
            datasets: {
                bar: {
                    base: 0,
                    borderWidth: 3,
                    hoverBorderColor: "white",
                    hoverBorderWidth: 3,
                    borderRadius: 10,

                }
            }
       
        }}/>
 </>
    );
};

export default Bargraph;