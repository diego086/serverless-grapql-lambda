// This is needed in order to get the pg module bundled with webpack
// eslint-disable-next-line
const pg = require('pg');
// eslint-disable-next-line
const mysql = require('mysql');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.db',
    },
  },
  production: {
    client: 'pg',
    //connection: process.env.DATABASE_URL, //THIS DOES NOT WORK. Should put it directly if not, there will be an error
    connection: 'postgres://${username}:{password}@${endpoint):5432/${dbName}',
  },
};
