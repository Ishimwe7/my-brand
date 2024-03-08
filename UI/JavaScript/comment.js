export default class Comment {
    constructor(author, content, articleId) {
        this._author = author;
        this._content = content;
        this._articleId = articleId;
        this._likes = 0;
        this._replies = [];
    }

    getAuthor() {
        return this._author;
    }
    setAuthor(author) {
        this._author = author;
    }
    getContent() {
        return this._content;
    }
    setContent(content) {
        this._content = content;
    }
    getArticleId() {
        return this._articleId;
    }
    setArticleId(articleId) {
        this._articleId = articleId;
    }
    getLikes() {
        return this._likes;
    }
    setLikes(likes) {
        this._likes = likes;
    }
    getReplies() {
        return this._replies;
    }
    setReplies(replies) {
        this._replies = replies;
    }

    // Method to increment the number of likes
    like() {
        this._likes++;
    }

    // Method to add a reply to the comment
    addReply(author, content) {
        const reply = {
            author: author,
            content: content,
        };
        this._replies.push(reply);
    }

    // Method to display the comment and its replies
    // displayComment() {
    //     console.log(`Author: ${this.author}`);
    //     console.log(`Content: ${this.content}`);
    //     console.log(`Likes: ${this.likes}`);

    //     if (this.replies.length > 0) {
    //         console.log("Replies:");
    //         this.replies.forEach((reply, index) => {
    //             console.log(`  Reply ${index + 1}:`);
    //             console.log(`    Author: ${reply.author}`);
    //             console.log(`    Content: ${reply.content}`);
    //         });
    //     } else {
    //         console.log("No replies yet.");
    //     }
    // }
}