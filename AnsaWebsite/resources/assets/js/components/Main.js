import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
 
/* Main Component */
class Main extends Component {
 
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
        <div className="col-md-6" id={menu.id}>
        <Menu menu={menu} />
                </div>
            ))}   
        </div>
    
              
           
       
    );
  }
}

export default Main;
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}