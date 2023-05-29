const sequelize = require ('../config/connection');
const seedBlogs = require('./blogSeeds');
const seedUsers = require('./userSeeds');
const seedComments = require('./commentSeeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedBlogs();

    await seedComments();
    
    process.exit(0);
};

seedDatabase();