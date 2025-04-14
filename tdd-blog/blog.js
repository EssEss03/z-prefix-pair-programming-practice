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

getAllGenres() {
  if (this.posts.length === 0) {
    return "There are no genres avaiable";
  }

  return this.posts.map(post => post.genre);
}

addComment(title, user, comment) {
  cont post = this.posts.find(post => post.title === title);
  if (!post) return;

  post.comments.push({ user, comment });
}

getBlogComments(title) {
  cont post = this.posts.find(post => post.title === title);
  if (!post) return [];

  return [{ comments: post.comments }];
}

getComentsBy(username) {
  const userComments = [];

  this.posts.forEach(post => {
    post.comments.forEach(comment => {
      if (comment.user === username) {
        user.Comments.push({
          article: post.title,
          comment: comment.comment
        });
      }
    });
  });

  return {
    user: username,
    comments: userComments
  };
}

module.exports = Blog;
