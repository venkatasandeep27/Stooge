import React from 'react';
import logo from './stooge.png';
import './Navigationbar.css'
import searchicon from './search.png';

export default class Navigationbar extends React.Component{
    render(){
        return(
            <div id="container">
                <img id="logo" src={logo} alt="stooge" />
                <form id="form">
                    <input id="searchbar"type="text" placeholder="Search your products here" />
                    <i className="fa fa-spinner fa-spin"><img className="searchicon"alt="search" src={searchicon}></img></i>
                </form>
                <div id="sign-div">
                    <p id="si">Sign in</p>
                    <p id="jn">Join now</p>
                </div>    
            </div>
        )
    }
}