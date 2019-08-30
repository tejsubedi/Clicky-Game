import React, {Component} from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

// import './App.css';

class App extends Component {
  render(){
    return (
      <div className=".container-fluid">
        <Navbar/>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
