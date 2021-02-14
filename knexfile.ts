import path from 'path';

const url = 'postgres://ebdfwpqtnpjxvv:8b1eae3bd031a2ba5a7b9c92a02ba368bf33c574049770ec2c8afb358f246748@ec2-50-19-171-158.compute-1.amazonaws.com:5432/dac6n8r4ruff9i';
module.exports = {
    client: 'pg',
    connection: {
        connectionString: url,
        ssl: { rejectUnauthorized: false },
      },
    migrations: {

        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
}