const {Model, Datatypes, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Sessions extends Model {}

Sessions.init(
    {
        session_key:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiration:{
            type: DataTypes.DATE,
            allowNull: false,
        },   
    },
    {
        sequelize,
        modelName: 'Sessions',
        timestamps: false,
    }
);

module.exports = Sessions;