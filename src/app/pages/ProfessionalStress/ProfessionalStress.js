import React from "react";
import Header from "../../components/Header/Header";
import classes from '../PhysicalStress/PhysicalStress.module.css';
import GreyArrowLeft from "../../assets/icons/GreyArrowLeft.svg";
import WhiteArrowRight from '../../assets/icons/WhiteArrowRight.svg';
import {useLocation, useNavigate} from "react-router-dom";
import config from "../../config";

function ProfessionalStress(props) {

    const navigate = useNavigate();
    const {state} = useLocation();
    const quiz1Information = state;
    // console.log(quiz1Information, "quiz1Information professionalStressPage")


    return (
        <div className="whole"
             style={{
                 'backgroundImage':
                     `url(${config.baseUrl}/bg_img/${props?.sectionsData[1]?.bg_img})`
             }}>
            <Header/>
            <div>
                <div className={classes.title}>{props?.sectionsData[1]?.title}</div>
                <div className={classes.text}>{props?.sectionsData[1]?.description}</div>
            </div>
            <div className={classes.arrows}>
                {/*<div className={classes.icon}><img src={WhiteArrowLeft} alt={""}/></div>*/}
                <div><img src={GreyArrowLeft} alt={""}/></div>
                <div className={classes.icon}
                    // onClick={() => navigate('/quiz-2', {state: props?.sectionsData[1]?.id})}
                     onClick={() => navigate('/quiz-2', {
                         state: {
                             sectionsDataId: props?.sectionsData[1]?.id,
                             quiz1Data: quiz1Information
                         }
                     })}>
                    <img src={WhiteArrowRight} alt={""}/>
                </div>
            </div>
        </div>
    )
}


export default ProfessionalStress
;