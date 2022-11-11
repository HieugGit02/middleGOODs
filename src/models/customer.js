'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    CustomerName: DataTypes.STRING,
    AccountName: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    Country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};