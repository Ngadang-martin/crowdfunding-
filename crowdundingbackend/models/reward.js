'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.reward.belongsTo(models.Projects,{
        foreignKey: {
          allowNull: false,
        }
      })

      models.reward.hasMany(models.reward_level,{
        onDelete: 'CASCADE'
      })

      models.reward.hasOne(models.delivery_address)

      models.reward.hasMany(models.Funding)

      models.reward.hasMany(models.Feetback, {
        onDelete: 'CASCADE',
      })


    }

  };
  reward.init({
    title: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    retail_price: DataTypes.DOUBLE,
    visicility: DataTypes.STRING,
    item: DataTypes.TEXT,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    send_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'reward',
  });
  return reward;
};