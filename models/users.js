const {Model, Datatypes, DataTypes} = require('sequelize');
const bcrypt = require ('bcrypt')
const sequelize = require('../config/connection');

class Users extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Users.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    { hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
        sequelize,
        modelName: 'Users',
        timestamps: true,
        onCascade: 'Delete',
    }
);

module.exports = Users;
