import Knex from 'knex';

export async function up(knex:Knex) {//criar a tabela
    return knex.schema.createTable('agricultor_produtos', table=>{
        table.increments('id').primary();
         table.integer('agricultor_id').notNullable().references('id').inTable('agricultor');
         table.integer('produto_id').notNullable().references('id').inTable('produto');
    })
}

export async function down(knex:Knex) {
    //voltar atras, deletar a tabela
    return knex.schema.dropTable('agricultor_produtos');
}