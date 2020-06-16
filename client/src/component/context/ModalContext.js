import React, {useState} from "react";
import axios from "axios";

const ModalContext = React.createContext();


const ModalStatusProvider = (props) => {
   
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitForm] = useState(false);

    const handleClose = () => {
        setInput({
            name: "",
            email: "",
            message: ""
        })
        setShow(false);
        let timer = setTimeout(function(){
            setSubmitForm(false);
        }, 200);
    };

    const handleShow = () => setShow(true);
    
    const handleChange = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        switch(field){
            case "name":
                setInput({
                        ...input,
                        name: value
                })
                break;
            case "email":
                setInput({
                    ...input,
                    email: value
                })
                break;
            case "message":
                setInput({
                    ...input,
                    message: value
                })
                break;
            default:
                return input;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitForm(true);
        //
        return axios.post("http://localhost:5000/api/submit", input).then(res => console.log(res));

    }

    return (
        <ModalContext.Provider value={{show, input, submitted , handleChange, handleSubmit, handleShow, handleClose}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export { ModalContext , ModalStatusProvider};
