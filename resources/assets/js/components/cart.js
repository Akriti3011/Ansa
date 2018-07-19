import React, { Component } from 'react';

  const Cart = ({menu}) => {


  return(  
    <div>
      
        <div className="myOrder">
          <h3>MY ORDER</h3>
          <hr></hr>
          <div className="row">
            <div className="cart">
              
              <div className=" text-left">
              <div className="col-sm-2">
                 <button className="btn btn-xs btn-danger" ><i className="glyphicon glyphicon-trash"></i></button>
              </div>
              <div className="col-sm-7">
                <h5>1 &ensp; &times; &ensp; {menu.name}</h5>
              </div>
              <div className="col-sm-3">
                <h5>&#x20B9; {menu.price} </h5>
              </div>
              </div>
               
              
            </div>
            <div className="total">
              <hr></hr>
              <h4 >Order Total &ensp;&ensp;&ensp;&ensp; &ensp; &ensp;&ensp; &#x20B9; 512</h4>
            </div>
           
              
              <a href="#myModal" data-toggle="modal"><button className="btn btn-success">
                Continue
            </button></a>
            
          </div>
        </div>
            </div>
  )
}

export default Cart ;