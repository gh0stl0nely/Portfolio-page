import React, {useContext} from 'react';
import ContactIcons from "./ContactIcons.js";
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
        borderRadius: "20px",
        width: "30%"
    }
}


function Footer(){
    const context = useContext(ModalContext);
    return(
        <div style={{backgroundColor: "#1f4068", textAlign: "center", color: "white"}}>
            <h1 style={{paddingTop: "20px"}}>Can I start adding value to you?</h1>
            <div style={{paddingTop: "20px"}}><i style={{fontSize: "90px"}} className="fa fa-hand-o-down"></i></div>
            <Button style={styles.contactButton} onClick={context.handleShow} variant="light">
                    Get in touch
            </Button>
            <ContactIcons />
            <div>
                Made with React Hooks and Bootstrap
            </div>
            <div style={{paddingBottom: "20px"}}>
               Copyright © 2020. All right reserved
            </div>
        </div>
    )
}

export default Footer;