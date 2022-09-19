const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js');
class PlayerName extends Model{}

PlayerName.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        player_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        players_score:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }

    },
    {
        sequelize,
        timestamps:true,
        freezeTableName: true,
        underscored:true,
        modelName: 'playerscore'
    }
);

module.exports = PlayerName;