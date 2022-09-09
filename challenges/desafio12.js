db.produtos.updateMany(
  { nome: { $not: /McChicken/ } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
