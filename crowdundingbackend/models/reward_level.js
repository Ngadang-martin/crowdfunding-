'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reward_level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.reward_level.belongsTo(models.reward,{
        foreignKey:{
          allowNull: false,
        }
      })
    }
  };
  reward_level.init({
    level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reward_level',
  });
  return reward_level;
};