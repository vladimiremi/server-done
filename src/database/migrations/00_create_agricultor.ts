import Knex from 'knex';

export async function up(knex:Knex) {//criar a tabela
    return knex.schema.createTable('agricultor', table=>{
        table.string('id').primary();
         table.string('name');
         table.string('nickname');
         table.string('locality');
         table.string('city');
         table.string('uf', 2);
         table.integer('whatsapp');
    })
}


export async function down(knex:Knex) {
    //voltar atras, deletar a tabela
    return knex.schema.dropTable('agricultor');
}