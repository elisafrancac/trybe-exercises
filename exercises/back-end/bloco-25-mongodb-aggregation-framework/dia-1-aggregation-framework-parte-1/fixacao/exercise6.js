// Selecione o valor total de transações;
db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        total: { $sum: "$value" },
      }
    }
  ]
);
