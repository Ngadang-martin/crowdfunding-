'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      models.Role.belongsToMany(models.Users,{
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT',
          through: models.User_role,
          foreignKey: 'roleId',
          otherkey: 'userId'
      })
      models.Users.belongsToMany(models.Role,{
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT',
        through: models.User_role,
        foreignKey: 'userId',
        otherkey: 'roleId'
    })

    models.User_role.belongsTo(models.Users,{
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT',
        foreignKey: {
            allowNull: false,
            name: 'userId'
        },
        as: 'user',
    })

    models.User_role.belongsTo(models.Role,{
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT',
        foreignKey: {
            allowNull: false,
            name: 'roleId'
        },
        as: 'role',
    })

    }
  };
  User_role.init({
     roleId: DataTypes.INTEGER,
     userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_role',
  });
  return User_role;
};