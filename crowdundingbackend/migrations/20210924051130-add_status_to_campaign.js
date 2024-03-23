'use strict';

module.exports = {
  up: async (query, DataTypes) => {
    const tableName = 'campagnes',
    tableDefinition = await query.describeTable(tableName),
    promises = [];

return await query.sequelize.transaction(transaction => {
    if (!tableDefinition.status) {
        promises.push(query.addColumn(tableName, 'status', {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "running",
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
