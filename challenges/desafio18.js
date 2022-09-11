db.produtos.updateMany(
  { name: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $addToSet: { ingredientes: "bacon" } },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
