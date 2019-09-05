const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:password@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

db
  .sync()
  .then(() => console.log(`database connected`))
  .catch(err => console.log(err))


module.exports = db