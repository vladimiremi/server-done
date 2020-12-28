import express from 'express';
import knex from './database/connection'

const routes = express.Router();

routes.get('/produtos', async (request, response)=>{
    const produtos = await knex('produto').select('*');

    return response.json({produtos});
});

routes.post('/agricultor', async (request, response)=>{
    const {
        name,
        nickname,
        locality,
        city,
        uf,
        whatsapp,
        password
    } = request.body;

    await knex('agricultor').insert({
        name,
        nickname,
        locality,
        city,
        uf,
        whatsapp,
        password
    });

    routes.post('/produto', (requent, response)=>{
        const {
            quantity,
            
        } = request.body;

    })

    return response.json({success: true});
});

export default routes;

// app.post('/register', (requeste, response)=>{
//     const { name, nickname, locality, whatsapp, password } = requeste.body;

//     const user = { name, nickname, locality, whatsapp, password };
//     users.push(user); 

//     return response.json(user);
// })