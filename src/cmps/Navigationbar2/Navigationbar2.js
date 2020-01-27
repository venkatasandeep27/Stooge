import React from 'react';
import './Navigationbar2.css';
import downarrow from'./downarrow.png';
export default class Navigationbar2 extends React.Component{
    render(){
        return(
            <div id="container">
                <div className="menulink"><p>All Stores</p>
                <img className="downimage" alt="downarrow" src={downarrow}/>
                </div>
                <div className="menulink"><p>Triple Cashback Stores</p></div>
                <div className="menulink"><p>Hot Deals</p><img className="downimage" alt="downarrow"src={downarrow}/></div>
                <div className="menulink"><p>Instock Cashback</p></div>
                <div className="menulink"><p>Travel & Vacation</p></div>
                <div className="menulink"><p>Refer and Earn</p></div>
                <div className="menulink"><p>Help</p></div>

            </div>
        )
    }
}