import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">Clicky Game</a>
                    </li>
                    <li>Click an image to begin!</li>
                    <li>Score:0</li>
                    <li>Top Score:0</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;