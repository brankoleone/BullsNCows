import React, { Component } from 'react';
import { BnC } from './models/BnC';

export default class GuessAlgo extends Component {
  digitToGuess: string;

  bnc: BnC = new BnC();
  state = { guesses: this.bnc.getGuesses() };

  constructor(props: any) {
    super(props);
    this.digitToGuess = this.bnc.generateRandomGuess();
    this.makeGuess = this.makeGuess.bind(this);
    this.clearGuesses = this.clearGuesses.bind(this);
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
          <button className="btn " onClick={this.clearGuesses}>
            Clear
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
    const guess = this.bnc.generateRandomGuess();

    console.log('Match: ', this.bnc.matchGuesses(guess, this.digitToGuess));

    this.setState({ guesses: this.bnc.insertGuess(guess) });
  }

  clearGuesses(): void {
    this.setState({ guesses: this.bnc.clearGuesses() });
  }
}
