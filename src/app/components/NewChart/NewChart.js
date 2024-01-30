import React from 'react';
import {ArcElement, Chart as ChartJS, RadialLinearScale,} from 'chart.js';
import {PolarArea} from 'react-chartjs-2';
import classes from './NewChart.module.css';

ChartJS.register(RadialLinearScale, ArcElement);

const PolarAreaChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '',
                data: [18, 18, 35, 45, 68],
                backgroundColor: [
                    '#FF3169', '#00B4B0', '#FFA523', '#9F49A3', '#00A0CF'
                ],
                borderWidth: 0,
                offset: 50,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.parsed.toFixed(2);
                        return `${label}: ${value}%`;
                    },
                },
            },
        },
    };

    return (
        <div className={classes.divStyle}>
            <PolarArea data={data} options={options}
            />
        </div>
    );
};

export default PolarAreaChart;
// <PolarArea
//     options={...}
//     data={...}
//     {...props}
// />