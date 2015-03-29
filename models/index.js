// pull in the Sequelize library
var Sequelize = require('sequelize');
// create an instance of a database connection
// which abstractly represents our app's mysql database
var ponderDB = new Sequelize('ponder', 'root', null, {
    dialect: "postgres",
    port:    5432,
});

// open the connection to our database
ponderDB
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  });

var Question = sequelize.define('question', {
  text: {
    type: Sequelize.STRING
  }
}

Question.sync({force: true})