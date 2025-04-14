class Blog {
  constructor() {
    this.posts = []; // store blog posts here
  }

  getBlogPosts() {
    if (this.posts.length === 0) {
      return "There are 0 blog posts";
    }
    return this.posts.map(post => post.title);
  }

  addBlogPost(title, author = null, genre = null) {
    cont post = {title, author, genre, comments: [] };
    this.posts.push(post);
  }

  getBlogAuthors() {
    return this.posts
      .filter(post => post.author !== null) //Only include posts with an author
      .map(post => post.author);
}

  getSpecificBlogAuthor() {
    const post = this.posts.find(post => post.title === title);

    if (!post) {
      return "No such blog post";
    }

    if (!post.author) {
      return "Blog has no author";
    }

    return post.author;
  }

getBlogsFromGenre(genre) {
  return this.posts.filter(post => post.genre === genre);
}

module.exports = Blog;
