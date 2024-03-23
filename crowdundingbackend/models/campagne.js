'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campagne extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.campagne.belongsTo(models.Projects,{
        foreignKey: {
          allowNull: false,
        }
      })
      models.campagne.hasMany(models.Funding,{
        onDelete: 'CASCADE',
      })

      models.campagne.hasMany(models.Feetback,{
        onDelete: 'CASCADE'
      })
    }
  };
  campagne.init({
    start_date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    end_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'campagne',
  });
  return campagne;
};