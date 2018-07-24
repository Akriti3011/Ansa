import React, { Component } from 'react';
import {Modal, Button, FormGroup, Col, ControlLabel, Form, FormControl} from 'react-bootstrap';

class openModal extends Component {

constructor(props) {
    super(props);
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
  
  handleInput(key, e) {
    var state = Object.assign({}, this.state.customer); 
    state[key] = e.target.value;
    this.setState({customer: state });
  }

  handleSubmit(e) { 
    e.preventDefault();
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
      <FormControl type="text"  placeholder="Name" required={true} 
      onChange={(e)=>this.handleInput('name',e)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formContact">
    <Col componentClass={ControlLabel} sm={2}>
      Contact
    </Col>
    <Col sm={10}>
      <FormControl type="number" placeholder="Contact" required={true}
       onChange={(e)=>this.handleInput('contact',e)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" required={true}
       onChange={(e)=>this.handleInput('email',e)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formPincode">
    <Col componentClass={ControlLabel} sm={2}>
      Pincode
    </Col>
    <Col sm={10}>
      <FormControl type="number" placeholder="Pincode" required={true}
      onChange={(e)=>this.handleInput('pincode',e)}  />
    </Col>
  </FormGroup>
  <FormGroup controlId="formAddress">
    <Col componentClass={ControlLabel} sm={2}>
      Address
    </Col>
    <Col sm={10}>
      <FormControl type="text"  placeholder="Address" required={true}
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