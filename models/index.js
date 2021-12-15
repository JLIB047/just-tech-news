const User = require('./User');
const Post = require('./Post')

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//defining realtionship of Post model to User model
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };