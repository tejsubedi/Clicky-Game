import React from 'react';
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">Clicky Game</a>
                    </li>
                    <li>Click an image to begin!</li>
                    <li className= "score">Your Score {props.total}</li>
                    <li className="totalScore">Total Score {props.total}</li>
                    <li className = "status">{props.status}</li>
                </ul>
    </nav>
);

// class Navbar extends Component {

//     render() {
//         return (
//             <nav className="navbar">
//                 <ul>
//                     <li className="brand">
//                         <a href="/">Clicky Game</a>
//                     </li>
//                     <li>Click an image to begin!</li>
//                     <li>Score:0</li>
//                     <li>Top Score:0</li>
//                 </ul>
//             </nav>
//         )
//     }
// }

export default Navbar;