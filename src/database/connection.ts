import knex from 'knex';
import path from 'path'; //une caminhos, padroniza o acesso ao caminho

const conection = knex({ 
  client: 'mysql',
  connection: {
      host : 'us-cdbr-east-03.cleardb.com',
      user : 'b948f608396fb1',
      password : '323ff37c',
      database : 'heroku_6740fa6777684a5'
    },
  useNullAsDefault: true,
});

export default conection;