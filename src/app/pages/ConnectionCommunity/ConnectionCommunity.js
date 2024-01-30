import React from "react";
import WhiteArrowRight from '../../assets/icons/WhiteArrowRight.svg';
import Header from "../../components/Header/Header";
import classes from '../PhysicalStress/PhysicalStress.module.css';
import GreyArrowLeft from "../../assets/icons/GreyArrowLeft.svg";
import {useLocation, useNavigate} from "react-router-dom";
import config from "../../config";


function ConnectionCommunity(props) {

    const navigate = useNavigate();
    const {state} = useLocation();
    const quiz1Information = state.quiz1Data;
    const quiz2Information = state.quiz2Data;
    const quiz3Information = state.quiz3Data;
    const quiz4Information = state.quiz4Data;
    const quiz5Information = state.quiz5Data;
    // console.log(state, "state connectioncommunity")


    return (
        <div className="whole"
             style={{
                 'backgroundImage':
                     `url(${config.baseUrl}/bg_img/${props?.sectionsData[5]?.bg_img})`
             }}>
            <Header/>
            <div>
                <div className={classes.title}>{props?.sectionsData[5]?.title}</div>
                <div className={classes.text}>{props?.sectionsData[5]?.description}</div>
            </div>
            <div className={classes.arrows}>
                <div><img src={GreyArrowLeft} alt={""}/></div>
                {/*<div className={classes.icon}><img src={WhiteArrowLeft} alt={""}/></div>*/}
                <div className={classes.icon}
                     onClick={() => navigate('/quiz-6', {
                         state: {
                             sectionsDataId: props?.sectionsData[5]?.id,
                             quiz1Data: quiz1Information,
                             quiz2Data: quiz2Information,
                             quiz3Data: quiz3Information,
                             quiz4Data: quiz4Information,
                             quiz5Data: quiz5Information
                         }
                     })}>
                    <img src={WhiteArrowRight} alt={""}/>
                </div>
            </div>
        </div>
    )
}

export default ConnectionCommunity;