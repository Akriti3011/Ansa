import React, { Component } from 'react';

class Cart extends Component {

 render(){
  var added = this.props.added;
  
  return(  
        <div>
          <div className="row">
            <div className="col-sm-1 noPadding">
              <a onClick={() =>this.props.delItem(added)} className="delbtn" >
              <i className="glyphicon glyphicon-trash"></i></a>
            </div>
            <div className="col-sm-1 noPadding">
              <input className="qty" value={added.quantity} disabled/>
            </div>
            <div className="col-sm-1 noPadding">
              <a onClick={() =>this.props.editItem(added)} className="plusbtn" >
              <i className="glyphicon glyphicon-plus"></i></a>
            </div>
            <div className="col-sm-6 text-left">
              <h5>{added.name}</h5>
            </div>
            <div className="col-sm-3 text-left">
              <h5>&#x20B9; {added.amount} </h5>
            </div>
          </div>  
        </div> 
  )
}
}

export default Cart ;