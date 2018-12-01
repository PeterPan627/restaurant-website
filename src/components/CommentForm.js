import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ 
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        alert(JSON.stringify(values));
    }
    render() {
        return(
        <div className="container">
           <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg">Submit Comment</span>
          </Button>
         <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                <Label htmlFor="rating" md={2}>Rating</Label>
                <Col>
                <Control.select model=".rating" name="rating"
                                className="form-control" >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </Control.select> 
                </Col>
                </Row>
                <Row className="form-group">
                            <Label htmlFor="name" md={2}>Name</Label>
                            <Col md={10}>
                                <Control.text model=".name" id="name" name="name" 
                                placeholder="Name" 
                                className="form-control"
                                validators= {{
                                    required, minLength : minLength(2), maxLength: maxLength(15)
                                }}
                                />
                                <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than two characters',
                                    maxLength: 'Must be less than 17 characters'
                                }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Message</Label>
                            <Col md={10}>
                                <Control.textarea model=".message" id="message" name="message" rows="8"
                                placeholder="Your message..."
                                className="form-control" />
                            </Col>
                        </Row>
                <Row className="Form-group">
                <Col md={{size: 10, offset: 2}}>
            <Button type="submit" value="submit" color="primary">Submit</Button>
            </Col>
            </Row>
            </LocalForm>
            </ModalBody>
            </Modal>
        </div>          
        )
    }
}

export default CommentForm