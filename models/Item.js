const {sequelize} = require('../db');

const { DataTypes } = require('sequelize');

// TODO - create a Menu model
const Item = sequelize.define ('Item',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.NUMBER,
    vegeterian: DataTypes.BOOLEAN
    
   

});
module.exports = {Item};