'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Projects.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        }
      })
     
      models.Projects.hasOne(models.campagne,{
        onDelete: 'CASCADE'
      })

      models.Projects.hasOne(models.ProjectFunding,{
        onDelete: 'CASCADE'
      })

      models.Projects.belongsTo(models.Category, {
        foreignKey: {
          allowNull: false
        }
      })

      models.Projects.hasMany(models.reward, {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      })

      models.Projects.hasMany(models.Project_asset,{
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      })

      models.Projects.hasMany(models.Feetback,{
        onDelete: 'CASCADE'
      })

    }
  };
  Projects.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    history: DataTypes.TEXT,
    description: DataTypes.TEXT,
    tag: DataTypes.TEXT,
    duration: DataTypes.STRING,
    country: DataTypes.STRING,
    video: DataTypes.TEXT,
    issent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isvalide: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};