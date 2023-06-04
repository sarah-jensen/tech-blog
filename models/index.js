const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//user has many blogposts
User.hasMany(Blog, {
    foreignKey: 'user_id',
});

//blogpost has one user
Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

//user has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

//comment has one user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//blog has many comments
Blog.hasMany(Comment, {
    foreignKey: 'blog_id', 
});

//comment has one blogpost
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

module.exports = {
    User,
    Blog,
    Comment,
};
