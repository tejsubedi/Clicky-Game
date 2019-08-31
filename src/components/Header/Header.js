import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render(){
        return(
            <div className="Header" style={{"height": 100}}>
                <h1>Clicky Game</h1>
            </div>
        )
    }
}

export default Header;


