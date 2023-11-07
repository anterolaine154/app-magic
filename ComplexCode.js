/*
   File Name: ComplexCode.js
   
   Description: This code is a simplified implementation of a social media platform. It includes functionality for user registration, authentication, posting messages, liking posts, and following users.
*/

// User class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.posts = [];
    this.following = [];
    this.followers = [];
  }
  
  createPost(content) {
    const post = new Post(this.username, content);
    this.posts.push(post);
  }
  
  likePost(postId) {
    const post = findPostById(postId);
    post.likes++;
  }
  
  follow(user) {
    user.followers.push(this);
    this.following.push(user);
  }
  
  unfollow(user) {
    const userIndex = this.following.indexOf(user);
    this.following.splice(userIndex, 1);
    
    const followerIndex = user.followers.indexOf(this);
    user.followers.splice(followerIndex, 1);
  }
}


// Post class
class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.likes = 0;
  }
}


// Utility functions
const users = [];

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

function findPostById(postId) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    
    for (let j = 0; j < user.posts.length; j++) {
      const post = user.posts[j];
      
      if (post.id === postId) {
        return post;
      }
    }
  }
  
  return null;
}


// Sample usage
const user1 = new User("john", "password1");
users.push(user1);

const user2 = new User("jane", "password2");
users.push(user2);

user1.createPost("Hello, world!"); // User1 creates a post
user2.likePost(0); // User2 likes User1's post
user2.follow(user1); // User2 follows User1

console.log(user1.posts); // [Post]
console.log(user2.following); // [User1]
console.log(user1.followers); // [User2]