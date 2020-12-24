import Knex from 'knex';

export async function up(knex:Knex) {//criar a tabela
    return knex.schema.createTable('agricultor', table=>{
        table.increments('id').primary();
         table.string('name').notNullable();
         table.string('nickname').notNullable();
         table.string('locality').notNullable();
         table.string('city').notNullable();
         table.string('uf').notNullable();
         table.integer('whatsapp').notNullable();
         table.integer('password').notNullable();
    })
}

export async function down(knex:Knex) {
    //voltar atras, deletar a tabela
    return knex.schema.dropTable('agricultor');
}