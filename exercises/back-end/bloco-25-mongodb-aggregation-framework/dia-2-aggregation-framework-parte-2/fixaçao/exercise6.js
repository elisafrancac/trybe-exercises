// Utilizando o banco de dados storage , faça os seguintes exercícios:
// Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      totalPrice: { $round: [{ $multiply: ["$sale_price", "$quantity"] }, 2] },
    }
  },
]);
// Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      totalProfit: { $round: [
        { $multiply: [
          { $abs: { 
            $subtract: [
              "$sale_price", 
              { $add: ["$purchase_price", "$taxes"] }
            ] }},
          "$quantity"
        ] }, 2 ],
      },
    },
  },
]);
