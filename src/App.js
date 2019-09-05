import React from 'react';
import header from './components/header';
import wrapper from './components/wrapper';
import card from './components/card';
import character from "./character.json";
import "./App.css";

class App extends React.Component {

  state = {
    character,
    score: 0,
    highscore: 10,
    message: "Click on Images to begin the game!"
  }

  cardsuffle = (id) => {
    if (this.state.character[id - 1].clicked) {
      this.setState({
        message: "wrong guess, Try again!",

      });
      // count score
    } else {
      this.setState({
        score: this.state.score += 1,
        message: "Right guess!",

        character: this.state.character.sort(() => Math.random() - 0.5)
      });
    }
    // count highscore
    if (this.state.highscore < this.state.score) {
      this.setState({
        highscore: this.state.score
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clicky Game!</h1>
          <p className="App-intro">
            Click on Images to play the GAME!!!
          </p>
        </header>
        <highscore total={this.state.highscore}
          goal={10}
          status={this.state.status}
        />
        <wrapper>
          {this.state.character.map(character => (
            <card
              cardsuffle={this.cardsuffle}
              id={character.id}
              key={character.id}
              images={character.image}
            />
          ))}
        </wrapper>

      </div>
    );
  }
}

export default App;
