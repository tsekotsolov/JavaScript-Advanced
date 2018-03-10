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

            let result = super.toString() + '\n' + `Rating: ${this.likes-this.dislikes}`

            if (this.comments.length != 0) {
                return result + '\n' + `Comments:\n * ${this.comments.join('\n * ')}`;
            }
            return result;

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

test.addComment('yesss')
test.addComment('yesss')
console.log(test.toString());