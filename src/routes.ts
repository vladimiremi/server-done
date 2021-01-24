import express, { request } from 'express';
import knex from './database/connection';
import crypto from 'crypto';

const routes = express.Router();

/*Rota de logon */
routes.post('/sessions', async (request, response)=>{
    const { id } = request.body;

    const agricultor = await knex('agricultor').where('id', id).select('nickname').first();

    if(!agricultor) {
        return response.status(400).json({error: 'Não existe agricultor com esse ID'});
    }
    return response.json(agricultor);
});

/*Rota de cadastro do agricultor */
routes.post('/agricultor', async (request, response)=>{
    const {
        name,
        nickname,
        locality,
        city,
        uf,
        whatsapp
    } = request.body;

    const id = crypto.randomBytes(4).toString('hex'); //gera o id do agricultor

    await knex('agricultor').insert({
        id,
        name,
        nickname,
        locality,
        city,
        uf,
        whatsapp
    });

    return response.json({ id });
});

/*Rota de cadastro de produto*/
routes.post('/produto', async (request, response)=>{
    const type  = request.body;

    await knex('produto').insert([
        type
    ]);

    return response.json({ type });
});

/*Cadastrar anúncio */
routes.post('/sale', async (request, response)=>{
    const {quantity, produto_id} = request.body;
    const agricultor_id = request.headers.authorization;

    await knex('agricultor_produtos').insert({
        quantity,
        agricultor_id,
        produto_id
    })

    response.json({succes: true})

})

/*Listar todos os anúncios */
routes.get('/', async (request, response)=>{
    const { page = 1 } = request.query; //pega minhas query ...3333?page=2

    const [count] = await knex('agricultor_produtos').count(); //retorna o total de anúncios...
    
    

    response.header('X-Total-Count', String(count['count(*)']));//... no cabeçalho da resposta da nossa requisição

    const sale = await knex('agricultor_produtos')
    .join('agricultor', 'agricultor.id', 'agricultor_produtos.agricultor_id')
    .join('produto', 'produto.id', 'agricultor_produtos.produto_id') //sistema de paginação
    .limit(5).offset((Number(page) - 1) * 5)
    .select(
        'agricultor_produtos.*',
        'agricultor_produtos.register_date',
        'agricultor_produtos.produto_id', 
        'produto.type', 
        'agricultor_produtos.quantity', 

        'agricultor.name', 
        'agricultor.nickname',
        'agricultor.whatsapp',

        'agricultor_produtos.id'
    ); 
    // knex('agricultor')
    // .join('agricultor_produtos', 'agricultor.id', 'agricultor_produtos.agricultor_id')
    // .join('produto', 'produto.id', 'agricultor_produtos.produto_id')
    // .select('agricultor.id', 'agricultor_produtos.register_date', 'agricultor.nickname', 'agricultor_produtos.produto_id', 'produto.type', 'agricultor_produtos.quantity', 'agricultor_produtos.id')
    // .where('agricultor.id', agricultor_id);

    return response.json({sale});
})

/*Listar anúcios de um agricultor específico */
routes.get('/user', async (request, response)=>{

    const agricultor_id = request.headers.authorization;
    console.log(agricultor_id);
    const salesUser = await knex('agricultor')
        .join('agricultor_produtos', 'agricultor.id', 'agricultor_produtos.agricultor_id')
        .join('produto', 'produto.id', 'agricultor_produtos.produto_id')
        .select('agricultor.id', 'agricultor_produtos.register_date', 'agricultor.nickname', 
            'agricultor_produtos.produto_id', 'produto.type', 'agricultor_produtos.quantity', 
            knex.raw('SUM(agricultor_produtos.quantity)'), 
            knex.raw('COUNT(agricultor_produtos.quantity)'), 'agricultor_produtos.id')
        .where('agricultor.id', agricultor_id)
        .groupByRaw('produto.type')
        .orderBy('agricultor_produtos.register_date');

    
    return response.json({salesUser});

})

/*Lista produtos */
routes.get('/produtos', async (request, response)=>{
    const produtos = await knex('produto').select('*');

    return response.json({produtos});
});

/*Lista agricultores */
routes.get('/listar', async (request, response)=>{
    const agricultores = await knex('agricultor').select('*');

    return response.json({agricultores})
})


/*Deletar anúncio */
routes.delete('/user/:id', async (request, response)=>{
    const { id } = request.params;
    const agricultor_id = request.headers.authorization;

    //retorna o id do agricultor
    const sale = await knex('agricultor_produtos').where('id', id).select('agricultor_id').first();
    //verificar se é o agricultor que está mesmo deletando
    if( sale.agricultor_id !== agricultor_id ) {
        return response.status(401).json({error: 'Operação não permitida.'});
    }
    //retorna o id do anúncio que vai ser deletado
    await knex('agricultor_produtos').where('id', id).delete();
 
    return response.status(204).send('Deletado com sucesso!');

})

export default routes;