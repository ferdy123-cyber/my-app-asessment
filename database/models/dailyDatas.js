const { Model, DataTypes } = require("sequelize");
const connection = require("../connection");

class DailyData extends Model {}

DailyData.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    date: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    total_income: {
      type: DataTypes.FLOAT(25),
      allowNull: false,
    },
    total_expense: {
      type: DataTypes.FLOAT(25),
      allowNull: false,
    },
    total_balance: {
      type: DataTypes.FLOAT(25),
      allowNull: false,
    },
  },
  {
    modelName: "DailyDatas",
    freezeTableName: true,
    sequelize: connection,
    timestamps: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = DailyData;
