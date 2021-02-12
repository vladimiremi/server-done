import Knex from 'knex';

export async function up(knex:Knex) {//criar a tabela
    return knex.schema.createTable('agricultor', table=>{
        table.string('id').primary();
         table.string('name').notNullable;
         table.string('nickname').notNullable();
         table.string('locality').notNullable();
         table.string('city').notNullable();
         table.string('uf', 2).notNullable();
         table.integer('whatsapp').notNullable();
    })
}


export async function down(knex:Knex) {
    //voltar atras, deletar a tabela
    return knex.schema.dropTable('agricultor');
}