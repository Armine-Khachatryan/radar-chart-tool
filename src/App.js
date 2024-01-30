import React, {useEffect, useState} from "react";
import Home from "./app/pages/Home/Home";
import axios from "axios";
import config from "./app/config";
import Loader from "./app/components/Loader/Loader";
import PhysicalStress from "./app/pages/PhysicalStress/PhysicalStress";
import FinancialStress from "./app/pages/FinancialStress/FinancialStress";
import ProfessionalStress from "./app/pages/ProfessionalStress/ProfessionalStress";
import PersonalRelationship from "./app/pages/PersonalRelationship/PersonalRelationship";
import FamilyRelationship from "./app/pages/FamilyRelationship/FamilyRelationship";
import Adaptability from "./app/pages/Adaptability/Adaptability";
import PersonalPerformance from "./app/pages/PersonalPerformance/PersonalPerformance";
import ConnectionCommunity from "./app/pages/ConnectionCommunity/ConnectionCommunity";
import PhysicalHealth from "./app/pages/PhysicalHealth/PhysicalHealth";
import EmotionalPerformance from "./app/pages/EmotionalPerformance/EmotionalPerformance";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Quiz1 from "./app/pages/Quiz1/Quiz1";
import Quiz2 from "./app/pages/Quiz2/Quiz2";
import Quiz3 from "./app/pages/Quiz3/Quiz3";
import Quiz4 from "./app/pages/Quiz4/Quiz4";
import Quiz5 from "./app/pages/Quiz5/Quiz5";
import Quiz6 from "./app/pages/Quiz6/Quiz6";
import Quiz7 from "./app/pages/Quiz7/Quiz7";
import Quiz8 from "./app/pages/Quiz8/Quiz8";
import Quiz9 from "./app/pages/Quiz9/Quiz9";
import Quiz10 from "./app/pages/Quiz10/Quiz10";
import Score from "./app/pages/Score/Score";
import {toast} from "react-toastify";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [sectionsData, setSectionsData] = useState([]);
    const [homeData, setHomeData] = useState([]);

    useEffect(() => {
        getSectionsData();
        getHomeData()
    }, []);


    let getSectionsData = async () => {
        setIsLoading(true);
        try {
            let response = await axios.get(`${config.baseUrl}/api/sections`);
            setIsLoading(false);
            setSectionsData(response.data.data)
        } catch (error) {
            setIsLoading(false);
            toast.error(
                error.response?.data.message || "Something went wrong."
            )
        }
    }


    let getHomeData = async () => {
        setIsLoading(true);
        try {
            let response = await axios.get(`${config.baseUrl}/api/home`);
            setIsLoading(false);
            setHomeData(response.data.data);
        } catch (error) {
            setIsLoading(false);
            toast.error(
                error.response?.data.message || "Something went wrong."
            )
        }
    }
    if (isLoading) return <Loader/>;


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home homeData={homeData}/>}/>
                <Route path="/home" element={<Home homeData={homeData}/>}/>
                <Route path="/physical-stress" element={<PhysicalStress sectionsData={sectionsData}/>}/>
                <Route path="/professional-stress" element={<ProfessionalStress sectionsData={sectionsData}/>}/>
                <Route path="/personal-relationship" element={<PersonalRelationship sectionsData={sectionsData}/>}/>
                <Route path="/family-relationship" element={<FamilyRelationship sectionsData={sectionsData}/>}/>
                <Route path="/financial-stress" element={<FinancialStress sectionsData={sectionsData}/>}/>
                <Route path="/connection-and-community" element={<ConnectionCommunity sectionsData={sectionsData}/>}/>
                <Route path="/emotional-performance" element={<EmotionalPerformance sectionsData={sectionsData}/>}/>
                <Route path="/adaptability" element={<Adaptability sectionsData={sectionsData}/>}/>
                <Route path="/personal-performance" element={<PersonalPerformance sectionsData={sectionsData}/>}/>
                <Route path="/physical-health" element={<PhysicalHealth sectionsData={sectionsData}/>}/>
                <Route path="/score" element={<Score/>}/>
                <Route path="/quiz-1" element={<Quiz1/>}/>
                <Route path="/quiz-2" element={<Quiz2/>}/>
                <Route path="/quiz-3" element={<Quiz3/>}/>
                <Route path="/quiz-4" element={<Quiz4/>}/>
                <Route path="/quiz-5" element={<Quiz5/>}/>
                <Route path="/quiz-6" element={<Quiz6/>}/>
                <Route path="/quiz-7" element={<Quiz7/>}/>
                <Route path="/quiz-8" element={<Quiz8/>}/>
                <Route path="/quiz-9" element={<Quiz9/>}/>
                <Route path="/quiz-10" element={<Quiz10/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
