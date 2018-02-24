function result(command) {

  let commands = {
    upvote: () => {
      this.upvotes++;
    },
    downvote: () => {
      this.downvotes++;
    },
    score: () => {

      let scoreArr = [];
      if (this.upvotes + this.downvotes > 50) {

        let addedNumber = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        scoreArr.push(`${this.upvotes+addedNumber}`);
        scoreArr.push(`${this.downvotes+addedNumber}`);

      } else {
        scoreArr.push(`${this.upvotes}`);
        scoreArr.push(`${this.downvotes}`);

      }
      
      scoreArr.push(`${this.upvotes}` - `${this.downvotes}`);
      scoreArr = scoreArr.map(Number);

      let rating = 'new';
      if (this.upvotes + this.downvotes < 10) {
        rating = 'new';
      } else if (this.upvotes / (this.upvotes + this.downvotes) > 0.66) {
        rating = 'hot';
      } else if ((this.upvotes / (this.upvotes + this.downvotes) <= 0.66) &&
        (this.upvotes > 100 || this.downvotes > 100) &&
        this.upvotes - this.downvotes >= 0) {
        rating = 'controversial';
      } else if (this.upvotes - this.downvotes < 0) {
        rating = 'unpopular';
      }
      scoreArr.push(rating);
      return scoreArr;
    }
  }
  return commands[command]();
}


var forumPost = {
  id: '1234',
  author: 'author name',
  content: 'these fields are irrelevant',
  upvotes: 4,
  downvotes: 5
};


var answer = result.call(forumPost, 'score');
var expected = [4, 5, -1, 'new'];


result.call(forumPost, 'downvote');
answer = result.call(forumPost, 'score');

result.call(forumPost, 'upvote');
result.call(forumPost, 'upvote');
answer = result.call(forumPost, 'score');
console.log((answer));