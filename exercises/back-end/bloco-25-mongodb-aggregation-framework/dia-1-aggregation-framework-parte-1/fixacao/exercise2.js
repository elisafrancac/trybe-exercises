// Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson".

db.transactions.aggregate(
  [ 
    { $match: {
      $and: [ { value: { $gt: 700, $lt: 6000 } }, { to: "Lisa Simpson" } ] 
      } 
    } 
  ]
);
