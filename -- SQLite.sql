--SQLite
select agricultor.id, agricultor.nickname, agricultor_produtos.produto_id, produto.type, agricultor_produtos.quantity from agricultor join agricultor_produtos
on agricultor.id = agricultor_produtos.agricultor_id
join produto
on produto.id = agricultor_produtos.produto_id;

-- SELECT produto.id, produto.type, agricultor_produtos.quantity from produto join agricultor_produtos
-- on produto.id = agricultor_produtos.produto_id;



SELECT produto.id, produto.type, sum(agricultor_produtos.quantity) from produto join agricultor_produtos
on produto.id = agricultor_produtos.produto_id
where produto.type = 'Branco';

select agricultor.id, agricultor.nickname, sum(agricultor_produtos.quantity) from agricultor join agricultor_produtos
on agricultor.id = agricultor_produtos.agricultor_id
join produto
on produto.id = agricultor_produtos.produto_id
where agricultor.nickname = 'Valdeci';

select agricultor.id, agricultor.nickname, produto.type, agricultor_produtos.quantity from agricultor join agricultor_produtos
on agricultor.id = agricultor_produtos.agricultor_id
join produto
on produto.id = agricultor_produtos.produto_id
where agricultor.nickname = 'Valdeci';