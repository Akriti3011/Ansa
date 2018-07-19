import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
 
/* Main Component */
class Order extends Component {
 
  constructor() {
   
    super();
    //Initialize the state in the constructor
    this.state = {
        menu: [],
        
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
        });
        
  }
 
 
   
  render() {
    
    return (
            

              <div className="row">
              {this.state.menu.map(menu => (
                <div>
                <div className="col-sm-10">
                  <Menu menu={menu} id={menu.id}/>
                </div>
                <div className="col-sm-2">
                <button className="addbtn btn-sm btn-primary">ADD</button>
                </div>
                </div>
              ))}   
              </div>
    
              
           
       
    );
  }
}

export default Order;
 
if (document.getElementById('pick')) {
    ReactDOM.render(<Order />, document.getElementById('pick'));
}