import React, {Component} from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Wrapper from "./components/Wrapper";
import pups from "./body.json";


class App extends Component {
  state = {
    pups,
    clickedPuppyIds: [],
    score: 0,
    goal: 12,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedPuppyIds = this.state.clickedPuppyIds;

    if(clickedPuppyIds.includes(id)){
      this.setState({ clickedPuppyIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedPuppyIds.push(id)

      if(clickedPuppyIds.length === 12){
        this.setState({score: 12, status: "You Won! Great Job, Smartie! Click to play again!", clickedPuppyIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ pups, clickedPuppyIds, score: clickedPuppyIds.length, status: " " });

      for (let i = pups.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pups[i], pups[j]] = [pups[j], pups[i]];
      }
    }
  }
  render(){
    return (
      <div>
        <Navbar 
        total={this.state.score}
               goal={12}
               status={this.state.status}
        />
        <Header />
        <div className="container">
        <Wrapper>
          {this.state.pups.map(puppy => (
            <Body
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </Wrapper>
        </div>
        <Footer/>
    </div>
    );
  }
  
}

export default App;
