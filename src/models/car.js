'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    carModel: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    carName: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:5
    }
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};