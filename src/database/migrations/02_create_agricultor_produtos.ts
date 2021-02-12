import Knex from 'knex';

export async function up(knex:Knex) {//criar a tabela
    return knex.schema.createTable('agricultor_produtos', table=>{
        table.increments('id').primary();
        table.integer('quantity').notNullable();
        table.timestamp('register_date').defaultTo(knex.fn.now());
        table.boolean('status').defaultTo(false);

        table.string('agricultor_id').notNullable();
        table.integer('produto_id').unsigned().notNullable();
        
        table.foreign('agricultor_id').references('agricultor.id'); //chave estrangeira agricultor
        table.foreign('produto_id').references('produto.id'); //chave estrangeira produto
    })
}
export async function down(knex:Knex) {
    //voltar atras, deletar a tabela
    return knex.schema.dropTable('agricultor_produtos');
}