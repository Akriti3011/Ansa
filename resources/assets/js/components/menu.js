import React, { Component } from 'react';

  const Menu = ({menu}, {isOrder}) => {
    
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
                    {isOrder ? (
        <div className="item-description">
                       {menu.description}
                    </div>
      ) : (
                    <div>
                       <div className="col-sm-10 item-description">{menu.description}</div>
                       <button className="col-sm-2 addbtn btn-sm btn-primary">ADD</button>
                    </div>
                   
      )}
                    
                </div>
            </div>
            </div>
  )
}

export default Menu ;