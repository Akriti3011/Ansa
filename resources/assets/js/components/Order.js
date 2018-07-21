import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import Cart from './cart';
 
/* Main Component */
class Order extends Component {
 
  constructor() {
   
    super();
    //Initialize the state in the constructor
    this.state = {
        menu: [],
        added:[],
        total:0,
        
    }
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }
  
  componentDidMount() {
    let added = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let total = 0;
    for(var i=0; i<added.length;i++){
      total = total + parseInt(added[i].amount); 
    }
    //console.log(total);
    
    /* fetch API in action */
    fetch('/api/menu')
        .then(response => {
            return response.json();
        })
        .then(menu => {
            //Fetched product is stored in the state
            this.setState({ menu });
            //console.log(menu);
        });
       this.setState({
    added: added,
    total:total,
  }); 
//console.log(this.total);
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
      
      var temp ={"id":menu.id,"name":menu.name,"amount":menu.price, "quantity":1};
      added.push(temp);
     
    }
    let total = 0;
    for(var i=0; i<added.length;i++){
      total = total + parseInt(added[i].amount); 
    }
    
    localStorage.setItem('cart', JSON.stringify(added));
    localStorage.setItem('total', total);
    this.setState({
    added: added,
    total:total,
  });
}
 
delete(update){
   let added = JSON.parse(localStorage.getItem('cart'));
   var obj = added.findIndex(function(obj){
      return obj.id==update.id;
    });
   let price = null;

     price = added[obj].amount / added[obj].quantity;
     added[obj].quantity = added[obj].quantity+1;
     added[obj].amount = added[obj].quantity * price;

   localStorage.setItem('cart', JSON.stringify(added));
localStorage.setItem('total', total);
   let total = 0;
    for(var i=0; i<added.length;i++){
      total = total + parseInt(added[i].amount); 
    }
    
   this.setState({
    added: added,
    total:total,
  });
  
  
} 

edit(update){
   let added = JSON.parse(localStorage.getItem('cart'));
   var obj = added.findIndex(function(obj){
      return obj.id==update.id;
    });
   let price = null;

  if(added[obj].quantity>1){
     price = added[obj].amount / added[obj].quantity;
     added[obj].quantity = added[obj].quantity-1;
     added[obj].amount = added[obj].quantity * price;
   }

  else{
      added.splice(obj, 1);
   }
   
   localStorage.setItem('cart', JSON.stringify(added));
localStorage.setItem('total', total);
   let total = 0;
    for(var i=0; i<added.length;i++){
      total = total + parseInt(added[i].amount); 
    }
    
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

                  <a href="#myModal" data-toggle="modal"><button className="conbtn btn btn-success">
                  Continue
                  </button></a>
                </div>  
          </div>
        </div>
      </div>
    
    );
  }
}

export default Order;
 
if (document.getElementById('pick')) {
    ReactDOM.render(<Order />, document.getElementById('pick'));
}