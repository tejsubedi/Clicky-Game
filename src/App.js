import React, {Component} from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Wrapper from "./components/Wrapper";
import picture from "./body.json";


class App extends Component {
  state = {
    picture,
    clickedImageIds: [],
    score: 0,
    goal: 12,
    status: ""
  };

  //shuffle the img cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedImageIds = this.state.clickedImageIds;

    if(clickedImageIds.includes(id)){
      this.setState({ clickedImageIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedImageIds.push(id)

      if(clickedImageIds.length === 12){
        this.setState({score: 12, status: "You Won! Great Job, Smartie! Click to play again!", clickedPuppyIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ picture, clickedImageIds, score: clickedImageIds.length, status: " " });

      for (let i = picture.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [picture[i], picture[j]] = [picture[j], picture[i]];
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
          {this.state.picture.map(pic => (
            <Body
              shuffleScoreCard={this.shuffleScoreCard}
              id={pic.id}
              key={pic.id}
              image={pic.image}
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
