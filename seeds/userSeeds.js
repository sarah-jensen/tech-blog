const { User } = require('../models');

const userData = [
    {
        id: '190e5b08-cf69-49d0-9655-2bf22975e01f',
        username: 'sequelize-sally',
        password: 'password1',
    },
    {
        id: '3143a642-8703-4437-8ae8-679f84c84b8c',
        username: 'express-evan',
        password: 'password2',
    },
    {
        id: '8556ef9d-bfbc-44a9-a057-e0695d89f24e',
        username: 'hbs-harold',
        password: 'password3',
    },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;