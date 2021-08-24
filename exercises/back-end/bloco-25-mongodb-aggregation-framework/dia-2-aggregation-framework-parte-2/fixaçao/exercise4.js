// Retorne o menor número inteiro relativo ao preço de venda de cada produto;
db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        floored_price: {
          $floor: "$sale_price"
        }
      }
    }
  ]
);
// Retorne o maior número inteiro relativo ao lucro total sobre cada produto.
db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1, total_profit: { 
        $ceil: 
          { $subtract: [
            "$sale_price", 
            { $add: ["$purchase_price", "$taxes"] }
          ] }
      } 
    }
  }
]);
