db.produtos.find(
  { ingredientes: { $eq: "picles" } },
  { nome: 1, ingredientes: 1, _id: 0, valoresNutricionais: { $slice: 3 } },
);
