// Expressão $add

// Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.
db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1, total_cost: { $add: ["$taxes", "$purchase_price"] }
    }
  }
]);
