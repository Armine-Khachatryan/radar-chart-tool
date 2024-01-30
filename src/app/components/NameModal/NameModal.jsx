import React, {useState} from "react";
import Modal from 'react-modal';
import classes from './NameModal.module.css'


function NameModal(props) {

    const [nameInput, setNameInput] = useState(null);
    const [nameError, setNameError] = useState(null);


    let handleChange = (e) => {
        const enteredName = e.target.value.trim();
        if (enteredName !== "") {
            setNameInput(enteredName);
            setNameError(null);
        } else {
            setNameError("Name is required");
        }
    }
    console.log(nameInput, nameError)


    const customStyles = {
        content: {
            padding: '25px',
            maxWidth: '500px',
            width: '100%',
            top: '35%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FFFFFF',
            borderRadius: '48px',
        },
        overlay: {zIndex: 1000}
    };

    let closeModalAndDelete = () => {
        props.closeModal();
        setNameInput(null);
        setNameError(null)
    }

    let sendName = () => {
        if (!nameInput) {
            setNameError("Name is required")
        } else {
            props.onSendName(nameInput)
        }
    }

    return (
        <>
            <Modal
                isOpen={props.modalIsOpen}
                onRequestClose={closeModalAndDelete}
                style={customStyles}
                ariaHideApp={false}
                class={"modalStyle"}>
                <div className={classes.modalInside}>
                    <div className={classes.boldTitle}>Please type your name !</div>
                    <div className={classes.inputAndSend}>
                        <div>
                            <input
                                name="name"
                                // value={emailInput}
                                type={"text"}
                                onChange={handleChange}
                                placeholder={"Enter your name"}
                                className={`${nameError ? classes.errorDiv : classes.inputStyle}`}/>
                            {nameError && <div className={classes.error}>{nameError}</div>}
                        </div>
                        <button className={classes.send}
                                onClick={() => sendName()}
                        >Generate Chart
                        </button>
                    </div>
                </div>
            </Modal>
        </>

    )
}


export default NameModal;