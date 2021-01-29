import Knex from 'knex';

export async function up(knex:Knex) {//criar a tabela
    return knex.schema.createTable('agricultor_produtos', table=>{
        table.increments('id').primary();
        table.integer('quantity').defaultTo(0);
        table.timestamp('register_date').defaultTo(knex.fn.now());
        table.boolean('status').defaultTo(false);
        table.integer('agricultor_id').notNullable().references('id').inTable('agricultor'); //chave estrangeira agricultor
        table.integer('produto_id').notNullable().references('id').inTable('produto'); //chave estrangeira produto
    })
}
export async function down(knex:Knex) {
    //voltar atras, deletar a tabela
    return knex.schema.dropTable('agricultor_produtos');
}