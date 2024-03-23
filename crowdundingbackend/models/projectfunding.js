'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectFunding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ProjectFunding.belongsTo(models.Projects)
    }
  };
  ProjectFunding.init({
    funding_type: DataTypes.STRING,
    goal: DataTypes.DOUBLE,
    bank_number: DataTypes.INTEGER,
    account_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectFunding',
  });
  return ProjectFunding;
};