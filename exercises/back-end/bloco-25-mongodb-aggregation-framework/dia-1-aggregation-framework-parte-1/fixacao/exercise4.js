// Utilizando o banco de dados agg_example e a coleção transactions , 
// faça os exercícios:
// Selecione todos os bancos, ou seja, valores do campo bank ;
db.transactions.aggregate([
  {
    $group: {
      _id: '$bank',
      bank: { $sum: 1 }
    }
  }
]);
