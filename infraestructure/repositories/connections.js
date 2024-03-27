

// const db = require('knex')({
//     client: 'mysql',
//     connection: {
//       host: 'database-1.cpewwewaqpz8.us-east-1.rds.amazonaws.com',
//       port: 3306,
//       user: 'admin_dev',
//       password: 'Fernet1882',
//       database: 'empleados_dev',
//     },
//   });
  

//   module.exports = {db};


const db = require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PW,
      database: process.env.MYSQL_DB,
    },
  });
  

  module.exports = {db};