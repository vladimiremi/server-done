import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        host : 'us-cdbr-east-03.cleardb.com',
        user : 'b948f608396fb1',
        password : '323ff37c',
        database : 'heroku_6740fa6777684a5'
      },
    migrations: {

        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    searchPath: ['knex', 'public'],
    useNullAsDefault: true,
}