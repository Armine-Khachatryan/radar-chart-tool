import React, {useEffect, useRef, useState} from "react";
import DownloadIcon from '../../assets/icons/Download.svg';
import classes from './Score.module.css';
import Header from "../../components/Header/Header";
import ApexChart from "../../components/Chart/Chart";
import {useLocation} from "react-router-dom";
import axios from "axios";
import config from "../../config";
import {toast} from "react-toastify";
import Loader from "../../components/Loader/Loader";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


function Score() {

    const [isLoading, setIsLoading] = useState(false);
    const {state} = useLocation();
    const user_id = state.user_id;
    const user_name = state.person_name;
    const [scoreData, setScoreData] = useState({});
    const chartRef = useRef();
    const regExpEmail = /\w+(\.|-|_)?\w+@\w+\.\w{2,3}/;
    const [emailInput, setEmailInput] = useState();
    const [emailError, setEmailError] = useState(null);
    const [todayDate, setTodayDate] = useState('');

    let series = Object.values(scoreData).map(function (str) {
        return parseInt(str, 10);
    })

    console.log(scoreData, "scoreData");


    let sum = series.reduce(function (acc, num) {
        return acc + num;
    }, 0);
    let score = Math.round(sum / series.length);

    let handleChange = (e) => {
        const isEmail = () => regExpEmail.test(e.target.value);
        console.log(isEmail())
        if (isEmail() === false) {
            setEmailError("Email is not valid")
        } else {
            setEmailInput(e.target.value);
            setEmailError(null)
        }
    }


    useEffect(() => {
        getScoreData();
        setTodayDate(getFormattedDate(new Date()));
    }, [])

    let getScoreData = async () => {
        let formData = new FormData();
        formData.append("user_id", user_id);
        setIsLoading(true)
        try {
            let response = await axios.post(`${config.baseUrl}/api/chart`, formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            setIsLoading(false);
            setScoreData(response.data.data)
        } catch (e) {
            console.log(e, "eeee")
            setIsLoading(false);
        }
    }


    async function downloadPDF() {
        const pageNode = document.getElementById("root");
        console.log(pageNode, "pageNode");
        try {
            let scale = 3;
            let dpi = window.devicePixelRatio * 600;
            if (window.innerWidth < 1000) {
                scale = 2.2;
            } else if (window.innerWidth < 1999) {
                scale = 2.5;
            }
            const canvas = await html2canvas(pageNode, {scale, dpi});
            console.log('Canvas Dimensions:', canvas.width, canvas.height);

            if (window.innerWidth > 767) {
                const imageData = canvas.toDataURL('image/jpeg', 1.0);
                const pdfWidth = window.innerWidth > 1023 ? 297 : 210;
                const pdfHeight = window.innerWidth > 1023 ? 210 : 297;
                const pdf = new jsPDF({
                    orientation: window.innerWidth > 1023 ? 'l' : 'p',
                    unit: 'mm',
                    format: 'a4',
                });
                pdf.addImage(imageData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('chart.pdf');
            } else {
                const paddingLeft = 40;
                const paddingRight = 40;
                const paddingTop = 20;
                const paddingBottom = 20;
                const pdfWidth = window.innerWidth > 1023 ? 257 : 130;
                const pdfHeight = window.innerWidth > 1023 ? 130 : 257;
                const imageData = canvas.toDataURL('image/jpeg', 1.0);
                const pdf = new jsPDF({
                    orientation: window.innerWidth > 1023 ? 'l' : 'p',
                    unit: 'mm',
                    format: 'a4',
                });
                pdf.rect(0, 0, pdfWidth + paddingLeft + paddingRight, pdfHeight + paddingTop + paddingBottom, 'F');
                pdf.addImage(imageData, 'JPEG', paddingLeft, paddingTop, pdfWidth, pdfHeight);
                pdf.save('chart.pdf');
            }
        } catch (error) {
            console.error('Error converting page to PDF:', error);
        }
    }


    // const SendEmail = async () => {
    //     setIsLoading(true);
    //     try {
    //         let formData = new FormData();
    //         formData.append("email", emailInput);
    //         const chartInstance = window.Apex._chartInstances.find(
    //             (chart) => chart.id === "LineGraph1"
    //         );
    //         const chartNode = chartInstance.chart.el;
    //         const canvas = await html2canvas(chartNode, {width: 800, height: 800});
    //         const pdf = new jsPDF({
    //             orientation: 'p',
    //             unit: 'mm',
    //             format: 'a4',
    //         });
    //         const imageData = canvas.toDataURL('image/jpeg', 1.0);
    //         pdf.addImage(imageData, 'JPEG', 0, 30, 180, 180);
    //         const pdfBlob = pdf.output('blob');
    //         const file = new File([pdfBlob], "chart.pdf", {type: "application/pdf"});
    //         console.log(file, "file")
    //         formData.append("pdf", file,);
    //         let response = await axios.post(`${config.baseUrl}/api/pdf`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         setIsLoading(false);
    //         toast.success("Successfully sent to your email!!!")
    //     } catch (error) {
    //         setIsLoading(false);
    //     }
    // };

    const SendEmail = async () => {
        setIsLoading(true);
        try {
            let formData = new FormData();
            formData.append("email", emailInput);
            const pageNode = document.getElementById("root");
            let scale = 3;
            let dpi = window.devicePixelRatio * 600;
            if (window.innerWidth < 1000) {
                scale = 2.2;
            } else if (window.innerWidth < 1999) {
                scale = 2.5;
            }
            const canvas = await html2canvas(pageNode, {scale, dpi});
            if (window.innerWidth > 767) {
                const imageData = canvas.toDataURL('image/jpeg', 1.0);
                const pdfWidth = window.innerWidth > 1023 ? 297 : 210;
                const pdfHeight = window.innerWidth > 1023 ? 210 : 297;
                const pdf = new jsPDF({
                    orientation: window.innerWidth > 1023 ? 'l' : 'p',
                    unit: 'mm',
                    format: 'a4',
                });
                pdf.addImage(imageData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                const pdfBlob = pdf.output('blob');
                const file = new File([pdfBlob], "chart.pdf", {type: "application/pdf"});
                formData.append("pdf", file,);
                let response = await axios.post(`${config.baseUrl}/api/pdf`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setIsLoading(false);
                toast.success("Successfully sent to your email!!!")
            } else {
                const paddingLeft = 40;
                const paddingRight = 40;
                const paddingTop = 20;
                const paddingBottom = 20;
                const pdfWidth = window.innerWidth > 1023 ? 257 : 130;
                const pdfHeight = window.innerWidth > 1023 ? 130 : 257;
                const imageData = canvas.toDataURL('image/jpeg', 1.0);
                const pdf = new jsPDF({
                    orientation: window.innerWidth > 1023 ? 'l' : 'p',
                    unit: 'mm',
                    format: 'a4',
                });
                pdf.rect(0, 0, pdfWidth + paddingLeft + paddingRight, pdfHeight + paddingTop + paddingBottom, 'F');
                pdf.addImage(imageData, 'JPEG', paddingLeft, paddingTop, pdfWidth, pdfHeight);
                const pdfBlob = pdf.output('blob');
                const file = new File([pdfBlob], "chart.pdf", {type: "application/pdf"});
                formData.append("pdf", file,);
                let response = await axios.post(`${config.baseUrl}/api/pdf`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setIsLoading(false);
                toast.success("Successfully sent to your email!!!")
            }
        } catch
            (error) {
            setIsLoading(false);
        }
    }

    if (isLoading) return <Loader/>;

    return (
        series.length !== 0 ?
            <>
                <div className={classes.layout}>
                    <Header/>
                    <div className={classes.main}>
                        <div className={classes.inside}>
                            <div className={classes.left}>
                                <h2>Your <span className={classes.boldTitle}>score result</span></h2>
                                <div className={classes.boldNumber}
                                     style={{display: "flex"}}
                                >{score}
                                    <div className={classes.boldNumber}
                                         style={{
                                             marginTop: "20px",
                                             marginLeft: "10px"
                                         }}> /
                                    </div>
                                    <h2 style={{marginTop: "60px", marginLeft: "10px"}}>100 </h2>
                                </div>
                            </div>
                            {/*<div className={classes.right} id="rightContent">*/}
                            {/*    <div className={classes.todayDate}>{user_name}</div>*/}
                            {/*    <div className={classes.todayDate}>{todayDate}</div>*/}
                            {/*    /!*<PolarAreaChart/>*!/*/}
                            {/*    <ApexChart series={series} ref={chartRef}/>*/}
                            {/*</div>*/}

                            <div className={classes.rightContent}>
                                <div className={classes.todayDate}>{user_name}</div>
                                <div className={classes.todayDate}>{todayDate}</div>
                                {/*<PolarAreaChart/>*/}
                                <ApexChart series={series} ref={chartRef}/>
                            </div>
                        </div>
                        <div>
                            <div className={classes.downloadText}>You can download and send to your email</div>
                            <div className={classes.below}>
                                <div className={classes.downloadBtn} onClick={downloadPDF}>Download
                                    <img src={DownloadIcon} alt={""}/>
                                </div>
                                {/*<div className={classes.downloadBtn}*/}
                                {/*     onClick={() => downloadPDF("LineGraph1")}>Download*/}
                                {/*    <img src={DownloadIcon} alt={""}/>*/}
                                {/*</div>*/}
                                <div className={classes.line}/>
                                <div className={`${emailError ? classes.errorDiv : ""}`}>
                                    <div className={classes.inputAndSend}>
                                        <input
                                            name="email"
                                            type={"email"}
                                            onChange={handleChange}
                                            placeholder={"Enter your email"}/>
                                        <button className={classes.send} onClick={SendEmail}>Send</button>
                                    </div>
                                    {emailError && <div className={classes.error}>{emailError}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            :
            <Loader/>
    )
}

function getFormattedDate(date) {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString(undefined, options);
}


export default Score;