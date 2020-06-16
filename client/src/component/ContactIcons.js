import React from "react";

const defaultFontStyle = {
    fontSize: "40px",
    marginLeft: "20px",
    transition: "0.3s",
    backgrounColor: "white"
}

function focus(e){
    e.target.style.fontSize = "70px";
    e.target.style.cursor = "pointer";
}

function unfocus(e){
    e.target.style.fontSize = "50px";
}

function ContactIcons(){
    return (
        <div style={{marginTop: "20px", marginBottom: "20px"}}>
            <i onClick={() => window.open("https://github.com/gh0stl0nely")} onMouseOver={focus} onMouseLeave={unfocus} style={defaultFontStyle} className="fa fa-github"></i>
            <i onClick={() => window.open("https://www.linkedin.com/in/khoinguyen1997/")} onMouseOver={focus} onMouseLeave={unfocus} style={defaultFontStyle} className="fa fa-linkedin-square"></i>
            <i onClick={() => window.open("https://stackoverflow.com/users/12240415/gh0stl0nely")} onMouseOver={focus} onMouseLeave={unfocus} style={defaultFontStyle} className="fa fa-stack-overflow"></i>
            <i onClick={() => window.open("mailto:khoinguyen19971997@gmail.com")} onMouseOver={focus} onMouseLeave={unfocus} style={defaultFontStyle} className="fa fa-envelope"></i>
        </div>
    )
}

export default ContactIcons;