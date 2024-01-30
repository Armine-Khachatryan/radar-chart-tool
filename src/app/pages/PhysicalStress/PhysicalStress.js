import React from "react";
import WhiteArrowRight from '../../assets/icons/WhiteArrowRight.svg';
import GreyArrowLeft from '../../assets/icons/GreyArrowLeft.svg';
import classes from './PhysicalStress.module.css';
import Header from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";
import config from "../../config";

function PhysicalStress(props) {

    const navigate = useNavigate();

    return (
        <div className="whole"
             style={{
                 // 'background-image':
                 'backgroundImage':
                     `url(${config.baseUrl}/bg_img/${props?.sectionsData[0]?.bg_img})`
             }}>
            <Header/>
            <div>
                <div className={classes.title}>{props?.sectionsData[0]?.title}</div>
                <div className={classes.text}>{props?.sectionsData[0]?.description}</div>
            </div>
            <div className={classes.arrows}>
                <div><img src={GreyArrowLeft} alt={""}/></div>
                <div className={classes.icon} onClick={() => navigate('/quiz-1', {state: props?.sectionsData[0]?.id})}>
                    <img src={WhiteArrowRight} alt={""}/>
                </div>
            </div>
        </div>
    )
}


export default PhysicalStress;