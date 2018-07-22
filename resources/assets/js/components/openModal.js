import React, { Component } from 'react';
import {Modal, Button, FormGroup, Col, ControlLabel, Form, FormControl} from 'react-bootstrap';

class openModal extends Component {

constructor(props) {
    super(props);
       /* Initialize the state. */
       this.state = {
          customer:{
          name:'',
          contact:'',
          email:'',
          pincode:'',
          address:'',
        }
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  /* This method dynamically accepts inputs and stores it in the state */
  handleInput(key, e) {
    
    /*Duplicating and updating the state */
    var state = Object.assign({}, this.state.customer); 
    state[key] = e.target.value;
    this.setState({customer: state });

  }

 /* This method is invoked when submit button is pressed */
  handleSubmit(e) {
    //preventDefault prevents page reload   
    e.preventDefault();
    /*A call back to the onAdd props. The control is handed over
     *to the parent component. The current state is passed 
     *as a param
     */
     console.log(this.state.customer);
    this.props.orderNow(this.state.customer);
  }

 render(){
  
  
  return(  
        <div>
          
          <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formName">
    <Col componentClass={ControlLabel} sm={2}>
      Name
    </Col>
    <Col sm={10}>
      <FormControl type="text"  placeholder="Name" 
      onChange={(e)=>this.handleInput('name',e)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formContact">
    <Col componentClass={ControlLabel} sm={2}>
      Contact
    </Col>
    <Col sm={10}>
      <FormControl type="number" placeholder="Contact"
       onChange={(e)=>this.handleInput('contact',e)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email"
       onChange={(e)=>this.handleInput('email',e)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formPincode">
    <Col componentClass={ControlLabel} sm={2}>
      Pincode
    </Col>
    <Col sm={10}>
      <FormControl type="number" placeholder="Pincode"
      onChange={(e)=>this.handleInput('pincode',e)}  />
    </Col>
  </FormGroup>
  <FormGroup controlId="formAddress">
    <Col componentClass={ControlLabel} sm={2}>
      Address
    </Col>
    <Col sm={10}>
      <FormControl type="text"  placeholder="Address"
      onChange={(e)=>this.handleInput('address',e)} />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button bsStyle="success" type="submit">Order Now</Button>
    </Col>
  </FormGroup>
</Form>
           
           
        </div> 
  )
}
}

export default openModal ;