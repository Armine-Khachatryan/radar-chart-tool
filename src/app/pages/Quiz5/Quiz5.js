import React, {useEffect, useState} from "react"
import FooterIcon from '../../assets/icons/FooterIcon.svg';
import Header from "../../components/Header/Header";
import BlackArrowRight from '../../assets/icons/BlackArrowRight.svg';
import NumbersComponent from "../../components/NumbersComponent/NumbersComponent";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import config from "../../config";
import Loader from "../../components/Loader/Loader";


function Quiz5() {

    const navigate = useNavigate();
    const routePath = useLocation();
    const {state} = useLocation();
    const idSection5 = state.sectionsDataId;
    const quiz1Information = state.quiz1Data;
    const quiz2Information = state.quiz2Data;
    const quiz3Information = state.quiz3Data;
    const quiz4Information = state.quiz4Data;
    // console.log(idSection5, "idSection5");
    const [isLoading, setIsLoading] = useState(false);
    const [questionsData, setQuestionsData] = useState([]);
    const [body, setBody] = useState([]);


    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);


    useEffect(() => {
        getQuestionsData();
    }, []);

    let getQuestionsData = async () => {
        setIsLoading(true);
        try {
            let response = await axios.get(`${config.baseUrl}/api/questions/${idSection5}`);
            setIsLoading(false);
            setQuestionsData(response.data.data)
            // console.log(response.data, "questionsData2")
        } catch (error) {
            setIsLoading(false);
        }
    }

    let setQuestionMark = (markData, questionId) => {
        let questionIndex = body.findIndex((item) => item.question_id === questionId);
        if (questionIndex !== -1) {
            let updatedBody = [...body];
            updatedBody[questionIndex] = {
                question_id: questionId,
                point: markData
            };
            setBody(updatedBody);
        } else {
            setBody([...body, {
                question_id: questionId,
                point: markData
            }]);
        }
    };

    let deleteMark = (questionId) => {
        let updatedBody = [...body];
        let newArray = updatedBody.filter((item, index) => item.question_id !== questionId);
        setBody(newArray);
    }

    const renderQuestions = questionsData?.map((item, index) => (
        <div className={"quizDiv"} key={item.id}>
            <li className="quiz">{item.question}</li>
            <NumbersComponent
                questionId={item.id}
                onDelete={deleteMark}
                onSetQuestionMark={setQuestionMark}
            />
        </div>
    ))

    if (isLoading) return <Loader/>;
    return (
        <div className="quizWhole">
            <Header/>
            <div>
                <div className="quizTitle">5/10 {questionsData[0]?.section_name[0]?.title}</div>
                <div className="quizSubTitle">Scoring: 0 -10 (0 completely disagree; 10 fully agree)</div>
                <ol>
                    {renderQuestions}
                </ol>
            </div>
            <div className={"below"}>
                <div><img src={FooterIcon} alt={""}/></div>
                <div className={`${body?.length === 10 ? "iconStyle" : "iconStyleNotAllowed"}`}
                     onClick={() => {
                         if (body.length === 10) {
                             navigate('/connection-and-community', {
                                 state: {
                                     quiz1Data: quiz1Information,
                                     quiz2Data: quiz2Information,
                                     quiz3Data: quiz3Information,
                                     quiz4Data: quiz4Information,
                                     quiz5Data: {
                                         section_id: idSection5,
                                         section: body
                                     }
                                 }
                             });
                         }
                     }}>
                    <img src={BlackArrowRight} alt={""}/>
                </div>
            </div>
        </div>
    )
}

export default Quiz5;
