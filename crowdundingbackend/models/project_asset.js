'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project_asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Project_asset.belongsTo(models.Projects,{
        foreigneKey:{
          allowNull: false,
        }
      })
       
      models.Project_asset.hasMany(models.photos,{
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      })
    }
  };
  Project_asset.init({
    asset_name: DataTypes.STRING,
    description: DataTypes.STRING,
    asset: DataTypes.STRING
  },{
    sequelize,
    modelName: 'Project_asset',
  });
  return Project_asset;
};