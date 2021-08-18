// Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate(
  [
    {
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "to",
        as: "transacoes_recebidas"
      },
    },
    {
      $limit: 4,
    }
  ]
);
