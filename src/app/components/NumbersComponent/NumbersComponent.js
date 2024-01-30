import React, {useState} from "react";


function NumbersComponent(props) {


    const [numbersArray, setNumberArray] = useState(
        Array.from({length: 10}, (_, k) => ({
            num: k + 1,
        }))
    )


    let toggleActive = (index) => {
        let copyNumbersArray = [...numbersArray];
        for (let i = 0; i < copyNumbersArray.length; i++) {
            if (i !== index) {
                copyNumbersArray[i].status = false;
            }
        }
        copyNumbersArray[index].status ?
            copyNumbersArray[index].status = false : copyNumbersArray[index].status = true;
        if (copyNumbersArray[index].status === true) {
            props.onSetQuestionMark(index + 1, props.questionId)
        } else if (copyNumbersArray[index].status === false) {
            props.onDelete(props.questionId)
        }
        setNumberArray(copyNumbersArray);
    }

    const renderNumbers = numbersArray.map((item, index) => (
        <div
            className={`${!item?.status ? "number" : "activeNumber"}`}
            key={index}
            onClick={() => {
                toggleActive(index)
            }}>{item.num}</div>
    ))

    return (
        <div className={"numbers"}>
            {renderNumbers}
        </div>
    )
}

export default NumbersComponent;