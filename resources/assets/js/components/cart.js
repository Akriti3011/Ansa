import React, { Component } from 'react';

class Cart extends Component {
//  delItem(update){
//    let look = JSON.parse(localStorage.getItem('cart'));
//    var obj = look.findIndex(function(obj){
//       return obj.id==update.id;
//     });

//    look.splice(obj, 1); 
//    localStorage.setItem('cart', JSON.stringify(look));
//    this.setState({
//     added: look,
//   });
  
// } 

 render(){
  var added = this.props.added;
  
  return(  
      <div>
          <div className=" text-left">
            <div className="col-sm-2">
              <button onClick={() =>this.props.delItem(added)} className="delbtn btn-xs btn-danger" >
              <i className="glyphicon glyphicon-trash"></i></button>
            </div>
            <div className="col-sm-7">
              <h5>{added.quantity} &ensp; &times; &ensp; {added.name}</h5>
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