const uuid = require("uuid");
// const brcypt = require("bcrypt");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [{
                id: uuid.v4(),
                email: "ferdyfian11@gmail.com",
                password: "rahasia123",
                // password: brcypt.hashSync("rahasia123", 12),
                name: "ferdyfian yohan aziizul alfandy",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                id: uuid.v4(),
                email: "agus445@gmail.com",
                // password: brcypt.hashSync("zxc123", 12),
                password: "zxc123",
                name: "cahbagus",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null);
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};