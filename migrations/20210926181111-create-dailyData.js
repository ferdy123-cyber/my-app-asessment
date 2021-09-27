module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("DailyDatas", {
      id: {
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true,
      },
      date: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      total_income: {
        type: Sequelize.FLOAT(25),
        allowNull: false,
      },
      total_expense: {
        type: Sequelize.FLOAT(25),
        allowNull: false,
      },
      total_balance: {
        type: Sequelize.FLOAT(25),
        allowNull: false,
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        onDeleted: "CASCADE",
        onUpdate: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        default: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        default: new Date(),
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("DailyDatas");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
