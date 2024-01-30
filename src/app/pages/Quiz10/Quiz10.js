import React, {useEffect, useState} from "react"
import FooterIcon from '../../assets/icons/FooterIcon.svg';
import Header from "../../components/Header/Header";
import BlackArrowRight from '../../assets/icons/BlackArrowRight.svg';
import NumbersComponent from "../../components/NumbersComponent/NumbersComponent";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import config from "../../config";
import Loader from "../../components/Loader/Loader";
import NameModal from "../../components/NameModal/NameModal";


function Quiz10() {

    const [modalIsOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const routePath = useLocation();
    const {state} = useLocation();
    const idSection10 = state.sectionsDataId;
    const quiz1Information = state.quiz1Data;
    const quiz2Information = state.quiz2Data;
    const quiz3Information = state.quiz3Data;
    const quiz4Information = state.quiz4Data;
    const quiz5Information = state.quiz5Data;
    const quiz6Information = state.quiz6Data;
    const quiz7Information = state.quiz7Data;
    const quiz8Information = state.quiz8Data;
    const quiz9Information = state.quiz9Data;
    // console.log(quiz1Information, "quiz1Information");
    // console.log(quiz9Information, "quiz9Information")

    const [isLoading, setIsLoading] = useState(false);
    const [questionsData, setQuestionsData] = useState([]);
    const [body, setBody] = useState([]);

    let openModal = () => {
        setModalOpen(true)
    }

    let closeModal = () => {
        setModalOpen(false)
    }


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
            let response = await axios.get(`${config.baseUrl}/api/questions/${idSection10}`);
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

    // console.log(body, "body")

    let getScore = async (name) => {
        setIsLoading(true);
        const postData = {
            token: '',
            name: name,
            sections: [
                quiz1Information,
                quiz2Information,
                quiz3Information,
                quiz4Information,
                quiz5Information,
                quiz6Information,
                quiz7Information,
                quiz8Information,
                quiz9Information,
                {
                    section_id: idSection10,
                    section: body
                }
            ]
        }
        try {
            let response = await axios.post(`${config.baseUrl}/api/quiz/data/`, postData, {
                headers: {
                    'Content-Type': 'application/json',
                    //     "Authorization": `Bearer ${token}`
                }
            })
            setIsLoading(false);
            navigate('/score'
                , {
                    state: {
                        user_id: response.data.data.user_id,
                        person_name: name
                    }
                })
            // console.log(response.data.data.user_id, "get score")
        } catch
            (error) {
            setIsLoading(false);
        }
    }
    // console.log(state, "state")

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
                <div className="quizTitle">10/10 {questionsData[0]?.section_name[0]?.title}</div>
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
                             // getScore()
                             openModal()
                         }
                     }}
                >
                    <img src={BlackArrowRight} alt={""}/>
                </div>
            </div>
            <NameModal modalIsOpen={modalIsOpen} closeModal={closeModal} onSendName={getScore}/>
        </div>
    )
}

export default Quiz10;
