import React, {useContext} from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
import {ModalContext} from "./context/ModalContext";

function MyModal(){
    const context = useContext(ModalContext);

    return (
        <>    
        <Modal show={context.show} onHide={context.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Form</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
                <Form style={{display: context.submitted ? "none" : "block"}} onSubmit={context.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={context.input.name} onChange={context.handleChange} name="name" placeholder="Ex: John Doe" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Contact</Form.Label>
                        <Form.Control value={context.input.email} onChange={context.handleChange} type="email" name="email" placeholder="Ex: john@gmail.com" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control value={context.input.message} onChange={context.handleChange} name="message" placeholder="Ex: Hi, My name is John" as="textarea" rows="3"/>
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Send Email
                    </Button>
                </Form>
                <div style={{display: context.submitted ? "block" : "none"}} >
                    <p>Thank you for getting in touch!</p>
                    <p>I will reply as soon as I received your message!</p>
                    <p>Best Regards</p>
                    <p>Khoi</p>
                </div>
          </Modal.Body>
        </Modal>
      </>
    )

}

export default MyModal;