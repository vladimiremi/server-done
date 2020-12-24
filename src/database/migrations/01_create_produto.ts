import Knex from 'knex';

export async function up(knex:Knex) {//criar a tabela
    return knex.schema.createTable('produto', table=>{
        table.increments('id').primary();
         table.string('type').notNullable();
         table.integer('quantity').notNullable();
    })
}

export async function down(knex:Knex) {
    //voltar atras, deletar a tabela
    return knex.schema.dropTable('produto');
}