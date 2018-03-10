function solve() {

    class Post {
        constructor(title, content) {

            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(value) {
            this.comments.push(value)
        };

        toString() {

            if (this.comments.length != 0) {
                return super.toString() + '\n' + `Rating: ${this.likes-this.dislikes}\nComments:\n * ${this.comments.join('\n * ')}`.trim();
            }
            return super.toString() + '\n' + `Rating: ${this.likes-this.dislikes}`

        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }

        view() {
            this.views++;
            return this;
        }

    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }

}

let classes = solve();

let post = new classes.Post("Post", "Content");

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);


console.log(test.toString());