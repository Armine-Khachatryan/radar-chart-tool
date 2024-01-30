import React from "react";
import WhiteArrowRight from '../../assets/icons/WhiteArrowRight.svg';
import Header from "../../components/Header/Header";
import classes from '../PhysicalStress/PhysicalStress.module.css';
import GreyArrowLeft from "../../assets/icons/GreyArrowLeft.svg";
import {useLocation, useNavigate} from "react-router-dom";
import config from "../../config";

function FamilyRelationship(props) {

    const navigate = useNavigate();
    const {state} = useLocation();
    const quiz1Information = state.quiz1Data;
    const quiz2Information = state.quiz2Data;
    const quiz3Information = state.quiz3Data;
    // console.log(state, "state familyrelationship")
    return (
        <div className="whole"
             style={{
                 'backgroundImage':
                     `url(${config.baseUrl}/bg_img/${props?.sectionsData[3]?.bg_img})`
             }}>
            <Header/>
            <div>
                <div className={classes.title}>{props?.sectionsData[3]?.title}</div>
                <div className={classes.text}>{props?.sectionsData[3]?.description}</div>
            </div>
            <div className={classes.arrows}>
                <div><img src={GreyArrowLeft} alt={""}/></div>
                {/*<div className={classes.icon}><img src={WhiteArrowLeft} alt={""}/></div>*/}
                <div className={classes.icon}
                     onClick={() => navigate('/quiz-4', {
                         state: {
                             sectionsDataId: props?.sectionsData[3]?.id,
                             quiz1Data: quiz1Information,
                             quiz2Data: quiz2Information,
                             quiz3Data: quiz3Information
                         }
                     })}>
                    <img src={WhiteArrowRight} alt={""}/>
                </div>
            </div>
        </div>
    )
}


export default FamilyRelationship;