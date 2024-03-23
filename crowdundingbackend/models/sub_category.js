'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sub_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here\
      models.Sub_category.belongsTo(models.Category,{
        foreignKey:{
          allowNull: false,
        }
      })
    }
  };
  Sub_category.init({
    category: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sub_category',
  });
  return Sub_category;
};