import React, { Component } from 'react';

  class Menu extends Component {

render(){
    var menu = this.props.menu;
  return(  
    <div>
    <div className="menu-item-card">
                <div className="item-image"><img src={menu.imagePath} /></div>
                <div className="item-content">
                    <div className="top-line">
                        <div className="item-name">
                            {menu.name}
                        </div>
                        <div className="item-dots">
                            <div className="dots"></div>
                        </div>
                        <div className="item-price">
                            &#x20B9; {menu.price}
                        </div>
                    </div>
                    
        <div className="item-description">
                       {menu.description}
                    </div>
                    
                </div>
            </div>
            </div>
  )
}
}

export default Menu ;