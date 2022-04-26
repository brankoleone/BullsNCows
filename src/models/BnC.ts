export class BnC {
  guesses: string[] = [];

  getGuesses(): string[] {
    return this.guesses;
  }

  clearGuesses(): string[] {
    return (this.guesses = []);
  }

  insertGuess(guess: string): string[] {
    this.guesses.push(guess);
    return this.guesses;
  }

  generateRandomGuess(): string {
    let randomGuess = '';
    let digit = '';

    while (randomGuess.length < 4) {
      while (randomGuess.includes(digit)) {
        digit = String(Math.round(Math.random() * 9));
      }
      randomGuess += digit;
    }
    return randomGuess;
  }

  matchGuesses(guess: string, digitToGuess: string): { b: number; c: number } {
    let b = 0;
    let c = 0;

    Array.from(guess).forEach((ch, vi) => {
      const i = digitToGuess.indexOf(ch);
      if (i !== -1) {
        i === vi ? b++ : c++;
      }
    });

    return { b, c };
  }
}
