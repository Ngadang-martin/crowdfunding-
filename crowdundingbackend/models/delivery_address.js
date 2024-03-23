'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delivery_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.delivery_address.belongsTo(models.Users,{
        foreignKey:{
          allowNull: false,
        }
      })

      models.delivery_address.belongsTo(models.reward,{
        foreignKey:{
          allowNull: false
        }
      })
    }
  };
  delivery_address.init({
    address: DataTypes.STRING,
    shipping_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'delivery_address',
  });
  return delivery_address;
};