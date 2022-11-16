'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Members.init({
    MemberName: DataTypes.STRING,
    AccountName: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    Country: DataTypes.STRING,
    IsAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Members',
  });
  return Members;
};