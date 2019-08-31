import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render(){
        return(
            <div className="Header" style={{"height": 110}}>
                <h1>Clicky Game !</h1>
                <h5>Click on an image to earn points, but don't click on any more than once!</h5>
            </div>
        )
    }
}

export default Header;


