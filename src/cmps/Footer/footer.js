import React from 'react';
import './footer.css';
import android from '../Footer/android.png';
import apple from '../Footer/ios.png';
import twitter from '../Footer/twitter.png';
import Instagram from '../Footer/insta.png';
import Linkedin from '../Footer/linkedin.png';
import Facebook from '../Footer/fb.png';


export default class footer extends React.Component{
    render(){
        return(
            <div id="footer">
                <div className="app">
                    <h3>Download our App</h3>
                    <p>Stooge Mobile Apps</p>
                    <img className="image"alt="ios" src={android}/>
                    <img className="image"alt="android" src={apple}/>
                    <p>Available for ios & Android</p>
                </div>
                <div className="partner">
                    <h3>
                        PARTNER SITES
                    </h3>
                    <p>canada</p>
                    <p>America</p>
                    <p>Japan</p>
                    <p>China</p>
                    <p>North America</p>
                    <p>
                        korea
                    </p>
                </div>
                <div className="about">
                    <h3>
                        ABOUT
                    </h3>
                    <a href="">Get Started</a>
                    <a href="">About Us</a>
                    <a href="">Our New Name</a>
                    <a href="">Advertising & partnerships</a>
                    <a href="">Influencers & Partners</a>
                    <a href="">Press Room</a>
                    <a href="">Careers</a>
                    <a href="">Blog</a>
                    <a href="">site Map</a>
                    <a href="">terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Dont't Sell My Data</a>
                    <a href="">Help</a>
                </div>
                <div className="tools">
                    <h3>
                    TOOLS AND SERVICES
                    </h3>
                    <a href="">Stooge Cash Back via Visa Card</a>
                    <a href="">In-store Cash Back</a>
                    <a href="">Stooge Button</a>
                </div>
                <div className="stores">
                    <h3>
                        STORES AND BRANDS
                    </h3>
                    <a href="">Amazon</a>
                    <a href="">flipakart</a>
                    <a href="">Ebay</a>
                    <a href="">Myntra</a>
                    <a href="">Club Factory</a>
                    <a href="">Life Styles</a>
                    <a href="">paytm Mall</a>
                    <a href="">Jabong</a>
                    <a href="">Snapdeal</a>
                    <a href="">Ajio</a>
                    <a href="">Shopclues</a>
                </div>
                <div className="popular">
                    <h3>
                        POPULAR COUPON CODES
                    </h3>
                    <a href="">Baby & Kids Gear Coupons</a>
                    <a href="">Clothing Coupons</a>
                    <a href="">Accessories Coupons</a>
                    <a href="">Electronics Coupons</a>
                    <a href="">Travel & Vacation Deals</a>
                    <a href="">Health & Beauty Coupons</a>
                    <a href="">Shoes & Handbags Stores</a>
                    <a href="">Home Improvement & Appliances</a>
                    <a href="">Food & Restaurant Coupons</a>
                </div>
                <img className="social" alt="Twitter" src={twitter}/>
                <img className="social" alt="Instagram" src={Instagram}/>
                <img className="social" alt="Linkedin" src={Linkedin}/>
                <img className="social" alt="Facebook" src={Facebook}/>

            </div>
            
        )

    }
}