const sequelize = require("../connection");
const User = require("./user");
const Data = require("./data");

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

module.exports = {
    sequelize,
    User,
    Data,
};