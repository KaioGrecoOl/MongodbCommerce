db.produtos.updateMany({}, { $set: { avaliacao: 0 } });

db.produtos.updateMany({ tags: { $eq: "bovino" } }, { $set: { avaliacao: 5 } });

db.produtos.updateMany({ tags: { $eq: "ave" } }, { $set: { avaliacao: 3 } });

db.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });