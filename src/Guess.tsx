import React, { Component } from 'react';

export default class Guess extends Component {
  digitToGuess: string;
  state = { guesses: [] as string[], test: 'cabron' };
  bulls: string[] = [];
  cows: string[] = [];

  constructor(props: any) {
    super(props);
    this.makeGuess = this.makeGuess.bind(this);
    this.digitToGuess = this.generateRandomGuess();
  }

  render = () => (
    <React.Fragment>
      <div className="guess-holder grid grid-cols-3 divide-x divide-gray-600">
        <div className="text-center text-5xl">{this.digitToGuess}</div>
        <div className="text-center text-5xl">
          <div className="list-holder">
            <ol className="list-decimal">
              {this.state.guesses.map(guess => (
                <li className="mb-4" key={guess}>
                  {guess}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-blue" onClick={this.makeGuess}>
            Guess
          </button>
        </div>
      </div>
    </React.Fragment>
  );

  renderGuesses(): React.ReactNode {
    return (
      <div className="list-holder">
        <ol className="list-decimal">
          {this.state.guesses.map(guess => (
            <li>{guess}</li>
          ))}
        </ol>
      </div>
    );
  }

  makeGuess(): void {
    const guess = this.generateRandomGuess();
    const guesses = this.state.guesses;
    guesses.push(guess);
    this.setState({ guesses });
  }

  generateRandomGuess(): string {
    let randomGuess = '';
    while (randomGuess.length < 4) {
      let digit = String(Math.round(Math.random() * 9));
      console.log('digit:', digit);

      while (randomGuess.includes(digit)) {
        digit = String(Math.round(Math.random() * 9));
      }
      randomGuess += digit;
    }
    return randomGuess;
  }
}
