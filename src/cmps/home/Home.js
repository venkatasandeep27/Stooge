import React from 'react';
import Navigationbar from '../Navigationbar/Navigationbar';
import Navigationbar2 from '../Navigationbar2/Navigationbar2';
import CashbackOffer from '../cashbackstore/cashbackstore';
import FeaturesCard from '../FeaturesCard/features';
import Footer from '../Footer/footer';
import './Home.css'
export default class Home extends React.Component{
    render(){
        return(
            <div id="#container">
                <Navigationbar />
                <Navigationbar2 />
                <CashbackOffer />
                <h3>Featured Double Cash Back Stores</h3>
                <a className="link"href="">See All Stores</a>
                <div className="frames">
                    <FeaturesCard />
                </div>
                <Footer/>
            </div>
            
        )
    }   
}