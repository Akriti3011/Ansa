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
        isOrder:true,
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
                <div className="col-md-12">
                  <Menu menu={menu} isOrder={true}/>
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