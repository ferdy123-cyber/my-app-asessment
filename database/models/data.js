const { Model, DataTypes } = require("sequelize");
const connection = require("../connection");

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    modelName: "Datas",
    sequelize: connection,
    paranoid: true,
    timestamps: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
});

module.exports = Product;