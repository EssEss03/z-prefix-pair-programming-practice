class Blog {
  constructor() {
    this.posts = []; // store blog posts here
  }

  getBlogPosts() {
    if (this.posts.length === 0) {
      return "There are 0 blog posts";
    }
  }
}

module.exports = Blog
