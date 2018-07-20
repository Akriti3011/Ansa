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
        });
        
  }

  addItem(menu) {
    const added = this.state.added.slice(0);
    added.push(menu);
    this.setState({
    added: added,
  });
    //localStorage.setItem('added', added.concat(added));
    console.log(added);
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
                <button className="addbtn btn-sm btn-primary" onClick={
                () =>this.addItem(menu)}>ADD</button>
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