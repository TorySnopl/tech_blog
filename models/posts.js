const {Model, Datatypes, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
    {
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        content:{
            type: DataTypes.TEXT,
        },
        created_at:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },   
    },
    {
        sequelize,
        modelName: 'Posts',
        timestamps: true,
        onCascade: 'Delete',
    }
);

module.exports = Posts;