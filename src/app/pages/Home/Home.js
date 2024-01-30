import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import BlackArrowStart from '../../assets/icons/BlackArrowStart.svg';
import Header from "../../components/Header/Header";
import config from "../../config";
import classes from './Home.module.css';


function Home(props) {

    const routePath = useLocation();
    const navigate = useNavigate();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);


    return (
        <div className="wholeHome"
             style={{
                 'backgroundImage':
                     `url(${config.baseUrl}/bg_img/${props?.homeData[0]?.bg_img})`
             }}>
            <Header/>
            <div>
                {/*<div className={classes.title}>Helping founders</div><br/>*/}
                <div className={classes.boldTitle}>{props?.homeData[0]?.title}</div>
                <div className={classes.text}>{props?.homeData[0]?.description}</div>
                {/*<div className={classes.text}>Hello and Welcome to Your to Prescribe <br/>*/}
                {/*    Life Global Health Scorecard*/}
                {/*</div>*/}
                <button className={classes.startBtn} onClick={() => navigate('/physical-stress')}>Start
                    <img className={classes.arrowImg} src={BlackArrowStart} alt={""}/>
                </button>
            </div>
            <div/>
        </div>
    )
}


export default Home;