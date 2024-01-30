import React, {useEffect, useState} from "react"
import FooterIcon from '../../assets/icons/FooterIcon.svg';
import Header from "../../components/Header/Header";
import NumbersComponent from "../../components/NumbersComponent/NumbersComponent";
import {useLocation, useNavigate} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import config from "../../config";
import BlackArrowRight from '../../assets/icons/BlackArrowRight.svg'


function Quiz1() {

    const navigate = useNavigate();
    const routePath = useLocation();
    const {state} = useLocation();
    const idSection1 = state;
    // console.log(idSection1, "idSection1");
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
            let response = await axios.get(`${config.baseUrl}/api/questions/${idSection1}`);
            setIsLoading(false);
            setQuestionsData(response.data.data)
        } catch (error) {
            setIsLoading(false);
        }
    }

    // console.log(body.length, "body length")

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

    // console.log(body, "body1");
    if (isLoading) return <Loader/>;

    return (
        <div className="quizWhole">
            <Header/>
            <div>
                <div className="quizTitle">1/10 {questionsData[0]?.section_name[0]?.title}</div>
                <div className="quizSubTitle">Scoring: 0 -10 (0 completely disagree; 10 fully agree)</div>
                <ol>
                    {renderQuestions}
                </ol>
            </div>
            <div className={"below"}>
                <div><img src={FooterIcon} alt={""}/></div>
                <div
                    className={`${body?.length === 10 ? "iconStyle" : "iconStyleNotAllowed"}`}
                    onClick={() => {
                        if (body.length === 10) {
                            navigate('/professional-stress', {
                                state: {
                                    section_id: idSection1,
                                    section: body
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


export default Quiz1;


