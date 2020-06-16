import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./component/NavBar.js";
import About from "./component/pages/About";
import Project from "./component/pages/Project";
import ContactForm from "./component/ContactForm";
import { ModalStatusProvider } from "./component/context/ModalContext";
import ContactBlock from "./component/ContactBlock";
import Footer from "./component/Footer";

function App() {

  return (
      <div>
          {/* <NavBar /> */}
          <ModalStatusProvider>
            <About />
            <ContactBlock />
            <Project />
            <ContactForm />
            <Footer />
          </ModalStatusProvider>        
      </div>
  );
}


export default App;
