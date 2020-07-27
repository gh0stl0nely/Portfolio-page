import React, {useState, useEffect} from 'react';
// import {Jumbotron,Container, Button} from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade';
import { Transition } from 'react-transition-group';
import ProgrammingIcons from "../ProgrammingIcons.js";
import ContactIcons from "../ContactIcons";

function About() {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, [])

    return (
        <div style={{textAlign: "center", backgroundColor: "#1b1b2f", color: "white", paddingTop: "100px"}}>
               <h1>Khoi Nguyen</h1>
               <h4>Aspiring Full Stack Web Developer</h4>
               <p>Based in Toronto, Canada</p>
               <ContactIcons />
               <p>Email: khoinguyen19971997@gmail.com</p>
               <br/>
               <ProgrammingIcons />
               <Intro />
        </div>
    )
}

function Intro(){

    return (
        <div style={{backgroundColor: "#1f4068", paddingBottom: "50px"}}>
            <h1 style={{paddingTop: "70px", fontSize: "70px"}}>Greetings!</h1>
            <br/>
            <h2 style={{paddingBottom: "30px"}}>I am Khoi, and I can</h2>
            <p>	&#10032; Put together responsive UI with Bootstrap and Materialize</p>
            <p>	&#10032; Write RESTful API to perform CRUD operations with Express</p>
            <p>	&#10032; Query SQL (MySQL) and NoSQL (MongoDB) database </p>
            <p>	&#10032; Build full stack applications using MongoDB, Express, React, Node </p>
            <p>	&#10032; Work with unfamiliar code base, MVC framework and basic OOP concepts</p>
            <p>	&#10032; Work independently and effectively collaborate within a team</p>
            <p>	&#10032; &#10032; Debug, research and learn new concepts on my own</p>
            <p>... and more</p>
            <h4>I am now ready to take on new challenges</h4>
        </div>
    )
}

export default About;
  