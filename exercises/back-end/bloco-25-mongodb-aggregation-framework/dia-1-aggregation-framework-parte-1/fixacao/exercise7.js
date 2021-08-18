// Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate([
  {
    $match: {
      value: { $gt: 1000 }
    }
  },
  {
    $group: {
      _id: '$bank',
      total: { $sum: "$value" }
    }
  }
]);
