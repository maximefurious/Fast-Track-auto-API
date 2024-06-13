const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: '89.168.48.118',
    port: '5432',
    username: 'fasttrackauto',
    password: 'FX7rmiYHnLp7SR4J',
    database: 'fasttrackauto',
    pool: {
        max: 5, min: 0, acquire: 30000, idle: 10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;
