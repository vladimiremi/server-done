import express from 'express';

const routes = express.Router();

routes.get('/', (requeste, response)=>{
    return response.json({messege: 'Hello World!'});
});

export default routes;

// app.post('/register', (requeste, response)=>{
//     const { name, nickname, locality, whatsapp, password } = requeste.body;

//     const user = { name, nickname, locality, whatsapp, password };
//     users.push(user); 

//     return response.json(user);
// })