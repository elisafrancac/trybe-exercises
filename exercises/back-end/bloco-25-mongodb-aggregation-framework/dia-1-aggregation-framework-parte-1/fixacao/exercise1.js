// Utilizando o banco de dados agg_example , faça os seguintes exercícios:
// Selecione todas as transações feitas pelo cliente chamado "Dave America".
db.transactions.aggregate(
  [
    { $match: { from: "Dave America"} } 
  ]
);
