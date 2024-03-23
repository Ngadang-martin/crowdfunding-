'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feetback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Feetback.belongsTo(models.reward, {
        foreignKey: {
          allowNull: true,
        }
      })
      models.Feetback.belongsTo(models.Projects, {
        foreignKey: {
          allowNull: true,
        }
      })
      models.Feetback.belongsTo(models.campagne, {
        foreignKey: {
          allowNull: true,
        }
      })
    }
  };
  Feetback.init({
    comment: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feetback',
  });
  return Feetback;
};