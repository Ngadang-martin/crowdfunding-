'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.photos.belongsTo(models.Project_asset,{
        foreigneKey:{
          allowNull: false,
        }
      })
    }
  };
  photos.init({
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'photos',
  });
  return photos;
};