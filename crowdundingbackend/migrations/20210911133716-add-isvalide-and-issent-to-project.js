'use strict';

module.exports = {
  up: async (query, DataTypes) => {
    const tableName = 'Projects',
    tableDefinition = await query.describeTable(tableName),
    promises = [];

return await query.sequelize.transaction(transaction => {
    if (!tableDefinition.isvalide) {
        promises.push(query.addColumn(tableName, 'isvalide', {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }, { transaction }))
    }
    if (!tableDefinition.issent) {
      promises.push(query.addColumn(tableName, 'issent', {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
      }, { transaction }))
  }
  
    return Promise.all(promises)
})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
