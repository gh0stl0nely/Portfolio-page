import React from 'react';
import Card from 'react-bootstrap/Card'
import {Container, Row, Col, Button} from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import projectData from "../../Source.json";
import Popover from 'react-bootstrap/Popover';
import "./project.css";

const styles = {
    marginTop : {
        marginBottom: "30px"
    },

    text : {
        position: "absolute",
        color: "white",
        fontSize: "20px",
        WebkitTransform: "translate(-50%, -50%)",
        msTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
        top: "40%",
        left: "50%"
    },
    repo: {
        paddingTop: "100px",
        fontSize: "40px",
        borderColor: "#e43f5a",
        fontSize: "45px"
    },
    demo: {
        marginTop: "-20px", 
        marginLeft: "5px",
        backgroundColor: "#162447",
        borderColor: "#e43f5a",
    },
}


function Project() {
    const renderProjects = () => {
        return (
            projectData.map((item,index) => {
                return (
                    <Col key={index} style={styles.marginTop} xs={12} sm={12} md={4} lg={3}>
                        <OverlayTrigger trigger="hover" placement="top" delay={{ show: 150, hide: 150 }} overlay={renderPopOver(item.description, item.tech)}>
                            <Card style={{textAlign: "center", position: "relative"}} className="bg-dark text-white">
                                <Card.Img style={{height: "200px"}} src={item.src} alt="Card image" />
                                <Card.ImgOverlay className="overlay">
                                    <Card.Title style={styles.text}>{item.title}</Card.Title>
                                    <Card.Text>
                                        <i style={styles.repo} onMouseEnter={(e) => e.target.style.cursor = "pointer"} onClick={() => window.open(item.repo)} class="fa fa-github" aria-hidden="true"></i>
                                        <Button style={styles.demo} onClick={() => window.open(item.url)}>Demo</Button>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </OverlayTrigger> 
                    </Col>
                )
            })
        )
    }

    const renderPopOver = (description, technology) => {
        return (
            <Popover id="popover-basic">
                <Popover.Title as="h3">{description}</Popover.Title>
                <Popover.Content>
                Built with: {technology}
                </Popover.Content>
          </Popover>
        )
    }

    return (
        <div style={{backgroundColor: "#1b1b2f", color: "white", paddingTop: "150px", marginTop: "-120px"}}>
            <h1 style={{textAlign: "center", paddingTop: "20px"}}>My Projects</h1>
            <Container>
                <Row style={{marginTop: "20px"}}>
                    {renderProjects()}
                </Row>
            </Container>
        </div>
    )
}

export default Project;