const sequelize = require("../connection");
const User = require("./user");
const Data = require("./data");
const DailyData = require("./dailyDatas");

User.hasMany(Data, {
  as: "datas",
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Data.belongsTo(User, {
  as: "users",
  foreignKey: "user_id",
  targetKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(DailyData, {
  as: "dailyDatas",
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

DailyData.belongsTo(User, {
  as: "users",
  foreignKey: "user_id",
  targetKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

DailyData.hasMany(Data, {
  as: "datas",
  foreignKey: "dailyData_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Data.belongsTo(DailyData, {
  as: "dailyDatas",
  foreignKey: "dailyData_id",
  targetKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = {
  sequelize,
  User,
  Data,
  DailyData,
};
