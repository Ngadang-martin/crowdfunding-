'use strict';
const {
  Model
} = require('sequelize');
const projects = require('./projects');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Projects, {
        onDelete: "CASCADE",
        onUpdate: 'RESTRICT'
      })
      models.Users.belongsToMany(models.Role,{
        foreignKey: 'userId',
        otherKey: 'roleId',
        through: models.User_role
      })

      models.Users.hasMany(models.delivery_address,{
        onDelete: "CASCADE"
      })

      models.Users.hasMany(models.Funding, {
        onDelete: "RESTRICT"
      })
    }
  };
  Users.init({
    fistname:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number:{
      type: DataTypes.STRING,
      allowNull: true
    },
    dob:{
      type: DataTypes.DATE,
      allowNull: true
    },
    country:{
      type: DataTypes.STRING,
      allowNull: true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: true
    },
    support_email:{
      type: DataTypes.STRING,
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bank_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

  }, {
    sequelize,
    tableName:'users',
    modelName: 'Users',
  });
  return Users;
};