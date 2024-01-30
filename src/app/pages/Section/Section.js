import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../../config";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import GreyArrowLeft from "../../assets/icons/GreyArrowLeft.svg";
import WhiteArrowRight from "../../assets/icons/WhiteArrowRight.svg";
import classes from './Section.module.css';





function Section(){


    // const [sectionsData, setSectionsData]=useState([]);
    // console.log(sectionsData, 22222222222)
    //
    // useEffect(()=>{
    //     getSectionsData();
    // }, []);
    // const [isLoading, setIsLoading] = useState(false);
    //
    // let getSectionsData =async ()=>{
    //     setIsLoading(true);
    //     try {
    //         let response = await axios.get(`${config.baseUrl}/sections`);
    //         setIsLoading(false);
    //         console.log(response, 11111111111111)
    //         setSectionsData(response.data.data)
    //     } catch (error) {
    //         setIsLoading(false);
    //         // toast.error(
    //         //     error.response?.data.message || "Something went wrong."
    //         // )
    //     }
    // }
    // if (isLoading) return <Loader/>;


    // const renderSections=sectionsData?.map((item, index)=>(
    //     <div className="whole">
    //         <Header/>
    //         <div>
    //             <div className={classes.title}>{item.title}</div>
    //             <div className={classes.text}>{item.description}</div>
    //         </div>
    //         <div className={classes.arrows}>
    //             <div><img src={GreyArrowLeft} alt={""}/></div>
    //             <div className={classes.icon} >
    //                 <img src={WhiteArrowRight} alt={""}/>
    //             </div>
    //         </div>
    //     </div>
    // ))


    return(
        <div></div>
        // {renderSections}
    )
}

export default Section;




