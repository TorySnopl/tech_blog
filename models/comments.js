const {Model, Datatypes, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
        text:{
            type: DataTypes.TEXT,
        },
        created_at:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },   
    },
    {
        sequelize,
        modelName: 'Comments',
        timestamps: true,
        onCascade: 'Delete',
    }
);

module.exports = Comments;