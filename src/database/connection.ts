import knex from 'knex';
import path from 'path'; //une caminhos, padroniza o acesso ao caminho

const url = 'postgres://ebdfwpqtnpjxvv:8b1eae3bd031a2ba5a7b9c92a02ba368bf33c574049770ec2c8afb358f246748@ec2-50-19-171-158.compute-1.amazonaws.com:5432/dac6n8r4ruff9i';
const conection = knex({ 
    client: 'pg',
    connection: {
      connectionString: url,
      ssl: { rejectUnauthorized: false },
    },
    
    useNullAsDefault: true,
});

export default conection;