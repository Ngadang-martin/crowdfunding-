'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Category.hasMany(models.Projects,{
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      })
      
      models.Category.hasMany(models.Sub_category,{
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      })
    }
  };
  Category.init({
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};