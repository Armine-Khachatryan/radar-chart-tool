import React from "react";
import WhiteArrowRight from '../../assets/icons/WhiteArrowRight.svg';
import Header from "../../components/Header/Header";
import classes from '../PhysicalStress/PhysicalStress.module.css';
import GreyArrowLeft from "../../assets/icons/GreyArrowLeft.svg";
import {useLocation, useNavigate} from "react-router-dom";
import config from "../../config";

function Adaptability(props) {

    const navigate = useNavigate();
    const {state} = useLocation();
    const quiz1Information = state.quiz1Data;
    const quiz2Information = state.quiz2Data;
    const quiz3Information = state.quiz3Data;
    const quiz4Information = state.quiz4Data;
    const quiz5Information = state.quiz5Data;
    const quiz6Information = state.quiz6Data;
    const quiz7Information = state.quiz7Data;

    // console.log(state, "state adaptability")

    return (
        <div className="whole"
             style={{
                 'backgroundImage':
                     `url(${config.baseUrl}/bg_img/${props?.sectionsData[7]?.bg_img})`
             }}>
            <Header/>
            <div>
                <div className={classes.title}>{props?.sectionsData[7]?.title}</div>
                <div className={classes.text}>{props?.sectionsData[7]?.description}</div>
            </div>
            <div className={classes.arrows}>
                <div><img src={GreyArrowLeft} alt={""}/></div>
                {/*<div className={classes.icon}><img src={WhiteArrowLeft} alt={""}/></div>*/}
                <div className={classes.icon}
                     onClick={() => navigate('/quiz-8', {
                         state: {
                             sectionsDataId: props?.sectionsData[7]?.id,
                             quiz1Data: quiz1Information,
                             quiz2Data: quiz2Information,
                             quiz3Data: quiz3Information,
                             quiz4Data: quiz4Information,
                             quiz5Data: quiz5Information,
                             quiz6Data: quiz6Information,
                             quiz7Data: quiz7Information
                         }
                     })}>
                    <img src={WhiteArrowRight} alt={""}/>
                </div>
            </div>
        </div>
    )
}

export default Adaptability;