import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import Cart from './cart';
import {Modal, Button, FormGroup, Col, ControlLabel, Form, FormControl} from 'react-bootstrap';
/* Main Component */
class Order extends Component {
 
  constructor() {
   
    super();
    //Initialize the state in the constructor
    this.state = {
        menu: [],
        added:[],
        total:0,
        show:false,
        value: ''
        
    }
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  
  componentDidMount() {
    let added = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    console.log(added);
    let total = localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0;
    
    /* fetch API in action */
    fetch('/api/menu')
        .then(response => {
            return response.json();
        })
        .then(menu => {
            //Fetched product is stored in the state
            this.setState({ menu });
        });
       this.setState({
    added: added,
    total:total,
  }); 
  }
handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addItem(menu) {
    let added = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    
    let index = null;

    var obj = added.find(function(obj){
      return obj.id==menu.id;
    });

    index = added.findIndex((arr => arr.id == menu.id));

     if(obj){
      added[index].quantity = added[index].quantity + 1;
      added[index].amount = added[index].quantity * menu.price ; 
    }
    else{
      
      var temp ={"id":menu.id,"name":menu.name,"amount":parseInt(menu.price), "quantity":1};
      added.push(temp);
     
    }
    let total = localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0;
    total = parseInt(total)+parseInt(menu.price);
    
    localStorage.setItem('cart', JSON.stringify(added));
    localStorage.setItem('total', JSON.stringify(total));
    this.setState({
    added: added,
    total:total,
  });
}
 
edit(item){
   let added = JSON.parse(localStorage.getItem('cart'));
   var obj = added.findIndex(function(obj){
      return obj.id==item.id;
    });
   let price = 0;

     price = added[obj].amount / added[obj].quantity;
     added[obj].quantity = added[obj].quantity+1;
     added[obj].amount = added[obj].quantity * price;

    let total = JSON.parse(localStorage.getItem('total'));
    total = parseInt(total)+price;

   localStorage.setItem('cart', JSON.stringify(added));
    localStorage.setItem('total', JSON.stringify(total));
    
   this.setState({
    added: added,
    total:total,
  });
  
  
} 

delete(item){
   let added = JSON.parse(localStorage.getItem('cart'));
   var obj = added.findIndex(function(obj){
      return obj.id==item.id;
    });
   let price = 0;
  price = added[obj].amount / added[obj].quantity;
  if(added[obj].quantity>1){
     added[obj].quantity = added[obj].quantity-1;
     added[obj].amount = added[obj].quantity * price;
   }

  else{
      added.splice(obj, 1);
   }

   let total = JSON.parse(localStorage.getItem('total'));
    total = parseInt(total)-price;
    console.log(total);

   localStorage.setItem('cart', JSON.stringify(added));
   localStorage.setItem('total', JSON.stringify(total));
    
   this.setState({
    added: added,
    total:total,
  });
  
} 
 

  render() {
    
    return (
            
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h3>OUR MENU </h3>
            <hr></hr>
              {this.state.menu.map(menu => (
                <div>
                  <div className="row">
                    <div className="col-sm-10">
                      <Menu menu={menu} />
                    </div>
                    <div className="col-sm-2">
                      <button className="addbtn btn btn-sm btn-primary" onClick={
                      () =>this.addItem(menu)}>ADD</button>
                    </div>
                  </div>
                </div>
              ))} 
          </div>
          <div className="col-sm-4">
                <div className="myOrder">
                  <h3>MY ORDER</h3>
                  <hr></hr>
                  {this.state.added ? 
                  <div className="cart">
                    {this.state.added.map(added => (
                      <div>
                        <Cart added={added} delItem={this.delete} editItem={this.edit} />
                      </div>
                    ))}
                  </div>
                  : null }  
                   <hr id="hr"></hr>
                  <div className="total">
                    <div className="col-sm-6 text-left">Order Total</div>
                    <div className="col-sm-6 text-right"> <b>&#x20B9; {this.state.total}</b></div>
                  </div>

                 <Button bsStyle="warning" className="conbtn" onClick={this.handleShow}>
          Continue
        </Button>
                </div>  
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>customer Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form horizontal>
          <FormGroup controlId="formName">
    <Col componentClass={ControlLabel} sm={2}>
      Name
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Name" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formContact">
    <Col componentClass={ControlLabel} sm={2}>
      Contact
    </Col>
    <Col sm={10}>
      <FormControl type="number" placeholder="Contact" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formPincode">
    <Col componentClass={ControlLabel} sm={2}>
      Pincode
    </Col>
    <Col sm={10}>
      <FormControl type="number" placeholder="Pincode" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formAddress">
    <Col componentClass={ControlLabel} sm={2}>
      Address
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Address" />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button bsStyle="success" type="submit">Order Now</Button>
    </Col>
  </FormGroup>
</Form>
           
          </Modal.Body>
          
        </Modal>
      </div>
    
    );
  }
}

export default Order;
 
if (document.getElementById('pick')) {
    ReactDOM.render(<Order />, document.getElementById('pick'));
}