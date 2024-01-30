import React, {forwardRef} from 'react';
import ReactApexChart from 'react-apexcharts';


const ApexChart = forwardRef((props, ref) => {


    const chartData = {
        series: props.series,
        options: {
            chart: {
                id: "LineGraph1",
                // toolbar: {
                //     show: true,
                // },
                // export: {},
                width: "100%",
                type: 'polarArea',
                background: '#fff',
                // foreColor: 'black',
                zoom: {
                    enabled: false
                }
            },
            responsive: [{
                breakpoint: 535,
                options: {
                    dataLabels: {
                        style: {
                            fontSize: '7px',
                        }
                    },
                    yaxis: {
                        labels: {
                            offsetX: 13,
                            offsetY: 13,
                            style: {
                                fontSize: "10px",
                            }
                        }
                    }
                },
            }],
            dataLabels: {
                enabled: true,
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.seriesIndex]
                },
                background: {
                    enabled: false,
                },
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    colors: ["black"],
                },
                offsetX: 2,
                offsetY: 8,
            },
            stroke: {
                show: true,
                colors: ['red'],
                curve: 'smooth',
                lineCap: 'butt',
                width: 2,
                dashArray: 0,
            },
            plotOptions: {
                polarArea: {
                    area: {
                        colors: ['#fff'],
                        zIndex: 20000,
                    },
                    rings: {
                        strokeWidth: 1,
                        strokeColor: "black",
                        zIndex: 3,
                    },
                    spokes: {
                        strokeWidth: 5,
                        connectorColors: "black",
                        zIndex: 4,
                    },
                }
            },
            yaxis: {
                show: true,
                showAlways: true,
                min: 0,
                max: 100,
                tickAmount: 6,
                labels: {
                    show: true,
                    offsetX: 15,
                    offsetY: 10,
                    style: {
                        colors: "black",
                        fontSize: "14px",
                        fontWeight: 800,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                }
            },
            labels: ['PHYSICAL', 'WORK STRESS', 'PERSONAL', 'FAMILY', 'FINANCIAL', 'CONNECTION', 'EMOTIONAL', 'RESILIENCE', 'PERFORMANCE', 'MENTAL'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                },
            },
            legend: {
                show: false,
                position: 'top'
            },
            colors: ['#FF3169', '#00B4B0', '#FFA523', '#9F49A3', '#00A0CF', '#C7F464', '#5653FE', '#FF4560',
                '#546E7A', '#FA4443'],
            // colors: ['transparent'],
        },
    }


    return (
        <div ref={ref} id="chart">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="polarArea"
                // width={800}
                width="100%"
            />
        </div>
    )
})


export default ApexChart;




