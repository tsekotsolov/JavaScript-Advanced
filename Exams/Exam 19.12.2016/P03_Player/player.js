class Player {

  constructor(nickname) {
    this.nickname = nickname;
    this.score = [];

  }

  get scoreCount() {
    return this.score.length;
  }

  get highestScore() {

    if (this.score.length === 0) {
      return undefined;
    }

    return Math.max.apply(null, this.score);

  }

  get topFiveScore() {
    return this.score.slice(0, 5);

  }

  addScore(value) {
    if (!isNaN(value)&&value!=null) {
      this.score.push(Number(value));
      this.score.sort((a, b) => b - a)
    }

    return this;
  }
  toString() {
    return `${this.nickname}: [${this.score.join(",")}]`
  }
}