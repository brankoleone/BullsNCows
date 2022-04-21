import React, { Component } from 'react';

export default class GuessAlgo extends Component {
  digitToGuess: string;
  state = { guesses: [] as string[] };
  bulls: string[] = [];
  cows: string[] = [];

  constructor(props: any) {
    super(props);
    this.digitToGuess = this.generateRandomGuess();
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
    const guess = this.generateRandomGuess();
    const guesses = this.state.guesses;

    console.log('Match: ', this.matchGuess(guess));

    guesses.push(guess);
    this.setState({ guesses });
  }

  matchGuess(value: string): { b: number; c: number } {
    let b = 0;
    let c = 0;

    Array.from(value).forEach((ch, vi) => {
      const i = this.digitToGuess.indexOf(ch);
      if (i !== -1) {
        if (i === vi) {
          b++;
        } else {
          c++;
        }
      }
    });

    return { b, c };
  }

  clearGuesses(): void {
    this.setState({ guesses: [] });
  }

  generateRandomGuess(): string {
    let randomGuess = '';
    while (randomGuess.length < 4) {
      let digit = String(Math.round(Math.random() * 9));
      while (randomGuess.includes(digit)) {
        digit = String(Math.round(Math.random() * 9));
      }
      randomGuess += digit;
    }
    return randomGuess;
  }
}
