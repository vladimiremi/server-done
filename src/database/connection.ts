import knex from 'knex';
import path from 'path'; //une caminhos, padroniza o acesso ao caminho

const conection = knex({ 
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'dbdone'
      },
    useNullAsDefault: true,
});

export default conection;