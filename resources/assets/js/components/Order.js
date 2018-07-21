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
        
    }
  }
  
  componentDidMount() {
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
        
  }

  addItem(menu) {
  //   const added = this.state.added.slice(0);
  //   added.push(menu);
  //   this.setState({
  //   added: added,
  // });
    //localStorage.setItem('added', added.concat(added));
    // console.log(menu.id);
    //let cart;
    //localStorage.clear();
    let added = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    
    let index = null;

    var obj = added.find(function(obj){
      return obj.id==menu.id;
    });

    index = added.findIndex((arr => arr.id == menu.id));
    //console.log(index);
     if(obj){
      added[index].quantity = added[index].quantity + 1;
      added[index].amount = added[index].quantity * menu.price ; 
    }
    else{
      
      var temp ={"id":menu.id,"name":menu.name,"amount":menu.price, "quantity":1};
      added.push(temp);
     
    }
 

    
    localStorage.setItem('cart', JSON.stringify(added));
    console.log(added);
    this.setState({
    added: added,
  });
}
 
delItem(update){
   let added = localStorage.getItem('cart');
   let index = null;
   index = added.findIndex((arr => arr.id == update.id));

   added.remove(index);
   console.log(added);


} 
 
   
  render() {
    
    return (
            
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h3>OUR MENU</h3>
            <hr></hr>
              {this.state.menu.map(menu => (
                <div>
                  <div className="row">
                    <div className="col-sm-10">
                      <Menu menu={menu} id={menu.id}/>
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
                  <div className="cart">
                    {this.state.added.map(added => (
                      <div>
                        <Cart added={added} />
                      </div>
                    ))}
                  </div>  
                   <hr id="hr"></hr>
                  <div className="total">
                    <div className="col-sm-6">Order Total</div>
                    <div className="col-sm-6"> <b>&#x20B9; 512</b></div>
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