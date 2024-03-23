'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Funding.belongsTo(models.Users,{
        foreignKey: {
          allowNull: false,
        }
      })
      models.Funding.belongsTo(models.campagne,{
        foreignKey: {
          allowNull: false,
        }
      })
      models.Funding.belongsTo(models.reward, {
        foreignKey: {
          allowNull: false,
        }
      })
    }
  };
  Funding.init({
    date: DataTypes.DATE,
    amount: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Funding',
  });
  return Funding;
};