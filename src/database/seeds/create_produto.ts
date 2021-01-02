import Knex from 'knex';

export async function seed(knex:Knex){
    await knex('produto').insert([
        {type: "Verdinho"},
        {type: "Branco"},
        {type: "Carioca"},
        {type: "Olho de Ovelha"},
        {type: "Moitinha"},
        {type: "Coquinho"},
        {type: "Cojó"},
        {type: "Santinaço"},
        {type: "Bahia"},
        {type: "Manelão"},
        {type: "Lijeiro"},
        {type: "Baije Rocha"},
        {type: "Cotó"},
        {type: "Casca Rocha"},
        {type: "Canapu"}

    ])
}

// export async function seed(knex:Knex){
//     await knex('agricultor').insert([
//         { name: "José Vladimir Costa Alves", nickname: "Mimi", locality: "Caldeirão", city: "Assunção do Piauí", uf: "PI", whatsapp: 86981266700, password: 1234 },
//         { name: "José Vladinei Costa Alves", nickname: "Dinei", locality: "Caldeirão", city: "Assunção do Piauí", uf: "PI", whatsapp: 86985646700, password: 1234 },
//         { name: "Valdeci Alves Pereira", nickname: "Valdeci", locality: "Caldeirão", city: "Assunção do Piauí", uf: "PI", whatsapp: 869856246700, password: 1234 },
//         { name: "João Campelo", nickname: "Seu João", locality: "Carnalbau", city: "Assunção do Piauí", uf: "PI", whatsapp: 869532545, password: 1234 },
//     ])
// }

// export async function seed(knex:Knex){
//     await knex('agricultor_produtos').insert([
//         {quantity: 100, agricultor_id: 1, produto_id: 1},
//         {quantity: 150, agricultor_id: 2, produto_id: 2},
//         {quantity: 200, agricultor_id: 3, produto_id: 3},
//         {quantity: 400, agricultor_id: 3, produto_id: 2},
//         {quantity: 500, agricultor_id: 3, produto_id: 1},
//     ])
// }