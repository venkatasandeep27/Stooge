import React from "react";
import './features.css';
import amazon from './download.png'
import FeaturesData from '../../features-data'
export default class features extends React.Component{
    
    render(){
        console.log(FeaturesData);
       const items = FeaturesData.map((item)=>{
            return <div className="container">
                 <img className="small"alt="amazon" src={item.image}/>
                 <div className="abc">
                    <p>{item.a}</p>
                    <p className="offer">1{item.cashback}</p>
                    <a href="www.amazon.com">{item.link}</a>
                </div>
            </div>
        })
        return(
            <>
            {items}

            </>
            
        )
    }
}