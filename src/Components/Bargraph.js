import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function Bargraph(props) {
    return (
       <>
       <Bar data={dummyDataBar}
                        options={{
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: {
                                decimation: {
                                    enabled: true,
                                },
                                title: {
                                    display: true,
                                    text: "Player stats",
                                    position: "bottom",
                                    color: "white",
                                    font: {
                                        size: 24,
                                        weight: "bold",

                                    }
                                },
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        display: true,
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
                        }}

                    />
       
       </>
    );
}

export default Bargraph;