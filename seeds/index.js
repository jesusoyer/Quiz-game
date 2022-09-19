const seedPlayerName = require('./playersandscore');


const sequelize = require('../config/connection');

const seedData = async () => {

    await sequelize.sync({force:true});

    await seedPlayerName();
    console.log("seeded")

};

seedData();