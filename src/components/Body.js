import React, { Component } from 'react';

class Body extends Component {

    render(){
        return(
            <div className="Body">
               <div className="container">
                   <div className="row">
                       <div className="col-md-3">
                       <input type ="image" src = "../assets/images/emoji1.jpeg" alt="Emoji1" className="click-item"></input>
                       </div>
                       <div className="col-md-3">
                       <input type ="image" src = "../assets/images/emoji1.jpeg" alt="Emoji1" className="click-item"></input>
                       </div>
                       <div className="col-md-3">
                       <input type ="image" src = "../assets/images/emoji1.jpeg" alt="Emoji1" className="click-item"></input>
                       </div>
                       <div className="col-md-3">
                       <input type ="image" src = "../assets/images/emoji1.jpeg" alt="Emoji1" className="click-item"></input>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default Body;

