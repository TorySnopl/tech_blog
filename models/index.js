// import models
const Comments = require('./comments');
const Posts = require('./posts');
const Users = require('./users');
const Sessions = require('./sessions');

Posts.belongsTo(Users,{foreignKey: 'id'});

Comments.belongsTo(Users, {foreignKey: 'id'});
Comments.belongsTo(Posts, {foreignKey: 'id'});

Sessions.belongsTo(Users, {foreignKey: 'id'});


module.exports = {
  Comments,
  Posts,
  Users,
  Sessions,
};
