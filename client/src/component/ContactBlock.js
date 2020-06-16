import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {ModalContext} from "./context/ModalContext";


const styles = {
    defaultBlockSize: {
        position: "relative",
        margin: "0 auto",
        marginTop: "-30px", 
        marginBottom: "-30px",
        borderRadius: "12px", 
        backgroundColor: "#e43f5a", 
        width: "70%",
        height: "150px",
        textAlign: "center",

    },
    contactButton : {
        marginTop: "30px",
        marginLeft: "5px",
        backgroundColor: "#162447",
        color: "white",
        borderColor: "#162447",
        borderRadius: "20px"
    }
}


function ContactBlock(){
    const context = useContext(ModalContext);
    return(
        <div style={styles.defaultBlockSize}>
            <Button style={styles.contactButton} onClick={context.handleShow} variant="light">
                    <i className="fa fa-check" style={{paddingRight: "5px"}}></i>
                    Start a conversation
                </Button>
            <Button style={styles.contactButton} onClick={() => window.open("https://drive.google.com/file/d/1-C2J0vlMgAB-oWOIVt-BwjCG_3SxIIBr/view?usp=sharing")} variant="light">
                    <i className="fa fa-file" style={{paddingRight: "5px"}}></i>
                    My Resume
            </Button>
        </div>
    )
}

export default ContactBlock;