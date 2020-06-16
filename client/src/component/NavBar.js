import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";

const styles = {
    buttonStyle: {
        background: "#343a40",
        marginTop: "5px",
        marginLeft: "5px",
        borderColor: "white",
    }
}

function NavBar(){

    function focus(e){
        e.stopPropagation();
        e.target.style.background = "white";
        e.target.style.color = "black"; 
    }

    function remove(e){
        e.stopPropagation();
        e.target.style.background = "#343a40";
        e.target.style.color = "white"; 
    }
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Button variant="secondary" style={styles.buttonStyle} onMouseOver={focus} onMouseLeave={remove}>
                           Who I am
                        </Button>
                        <Button variant="secondary" style={styles.buttonStyle} onMouseOver={focus} onMouseLeave={remove} >
                            Projects
                        </Button>
                        <Button variant="secondary" style={styles.buttonStyle} onMouseOver={focus} onMouseLeave={remove} >
                            Resume
                        </Button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>      
    )
}
export default NavBar;