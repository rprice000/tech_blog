const Sequelize = require('sequelize');
// Require method imports sequelize node.js module and creates a Sequelize object

require('dotenv').config();
// Require method imports the data from the .env file
// Config method will read your .env file, parse the contents, assign it to process.env, and return an 
// Object with a parsed key containing the loaded content or an error key if it failed.
// Notice how we don't have to save the require('dotenv') to a variable. All we need it to do here is 
// execute when we use connection.js and all of the data in the .env file will be made available at 
// process.env.<ENVIRONMENT-VARIABLE-NAME>.

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,
//# Takes the info from the .env and creates parameters for the sequelize object
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        });
//# creates connection to our database



module.exports = sequelize;
// exports the sequelize object to other parts of the application