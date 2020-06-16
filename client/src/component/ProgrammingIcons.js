import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const defaultIconSize = {
    fontSize: "80px",
    marginTop: "40px",
    paddingTop: "40px"
}

const defaultColMargin = {
    marginTop: "40px"
}

function ProgrammingIcons(){
    return (
        <Container style={{marginBottom: "70px"}}>
            <Row >
                <Col  style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-react-original-wordmark colored"></i></Col>
                <Col  style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-bootstrap-plain-wordmark colored"></i></Col>
                <Col  style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-javascript-plain colored"></i></Col>
                <Col  style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-jquery-plain-wordmark colored"></i></Col>
                <Col  style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-mongodb-plain-wordmark colored"></i></Col>
                <Col  style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-mysql-plain-wordmark colored"></i></Col>
            </Row>
            <Row >
                <Col style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-nodejs-plain colored"></i></Col>
                <Col style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-heroku-line-wordmark colored"></i></Col>
                <Col style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-sequelize-plain colored"></i></Col>
                <Col style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-visualstudio-plain colored"></i></Col>
                <Col style={defaultColMargin} xs={4} md={2}><i style={defaultIconSize} className="devicon-git-plain colored"></i></Col>
                <Col style={defaultColMargin} xs={4} md={2}><i style={{fontSize: "80px", color: "white"}} className="devicon-github-plain colored"></i></Col>
            </Row>
        </Container>
    )
}

export default ProgrammingIcons;