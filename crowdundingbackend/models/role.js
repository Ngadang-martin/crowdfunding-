'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Role.belongsToMany(models.Users,{
        foreignKey: 'userId',
        otherKey: 'roleId',
        through: models.User_role
      })  
    }
  };
  Role.init({ 
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};