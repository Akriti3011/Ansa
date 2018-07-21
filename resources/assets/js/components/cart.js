import React, { Component } from 'react';

class Cart extends Component {

 render(){
  var added = this.props.added;
  
  return(  
      <div>
          <div className=" text-left">
          <div className="col-sm-2">
              <button onClick={() =>this.props.editItem(added)} className="delbtn btn-xs btn-danger" >
              <i className="glyphicon glyphicon-minus"></i></button>
            </div>
            <div className="col-sm-2">
              <button onClick={() =>this.props.delItem(added)} className="delbtn btn-xs btn-danger" >
              <i className="glyphicon glyphicon-trash"></i></button>
            </div>
            <div className="col-sm-5">
              <h5>{added.quantity} &ensp; &times; {added.name}</h5>
            </div>
            <div className="col-sm-3">
              <h5>&#x20B9; {added.amount} </h5>
            </div>
          </div>
        </div> 
  )
}
}

export default Cart ;