import React from "react";
import WhiteLogo from '../../assets/icons/WhiteLogo.svg';
import GreyLogo from '../../assets/icons/GreyLogo.svg';
import GreyLinkedIn from '../../assets/icons/GreyLinkedIn.svg';
import WhiteLinkedIn from '../../assets/icons/WhiteLinkedIn.svg';
import classes from './Header.module.css';
import {useLocation} from "react-router-dom";


function Header() {

    const {pathname} = useLocation();

    const switchForHeaderLogo = (parameter) => {
        switch (parameter) {
            case '/':
                return <img src={WhiteLogo} alt={""}/>
            case '/home':
                return <img src={WhiteLogo} alt={""}/>
            case '/physical-stress':
                return <img src={WhiteLogo} alt={""}/>
            case '/professional-stress':
                return <img src={WhiteLogo} alt={""}/>
            case '/personal-relationship':
                return <img src={WhiteLogo} alt={""}/>
            case '/family-relationship':
                return <img src={WhiteLogo} alt={""}/>
            case '/connection-and-community':
                return <img src={WhiteLogo} alt={""}/>
            case '/emotional-performance':
                return <img src={WhiteLogo} alt={""}/>
            case '/adaptability':
                return <img src={WhiteLogo} alt={""}/>
            case '/personal-performance':
                return <img src={WhiteLogo} alt={""}/>
            case '/physical-health':
                return <img src={WhiteLogo} alt={""}/>
            case '/score':
                return <img src={WhiteLogo} alt={""}/>
            default:
                return <img src={GreyLogo} alt={""}/>
        }
    }


    const switchForHeaderLinkedIn = (param) => {
        switch (param) {
            case '/':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/home':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/physical-stress':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/professional-stress':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/personal-relationship':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/family-relationship':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/connection-and-community':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/emotional-performance':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/adaptability':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/personal-performance':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/physical-health':
                return <img src={WhiteLinkedIn} alt={""}/>
            case '/score':
                return <img src={WhiteLinkedIn} alt={""}/>
            default:
                return <img src={GreyLinkedIn} alt={""}/>
        }
    }

    return (
        <div className={classes.headerWhole}>
            <div className={classes.logoStyle}>
                {switchForHeaderLogo(pathname)}
            </div>
            <div className={classes.iconStyle}>
                {switchForHeaderLinkedIn(pathname)}
            </div>
        </div>
    )
}


export default Header;