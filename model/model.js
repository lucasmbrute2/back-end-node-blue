const mongoose = require("mongoose");

const filmeModel = new mongoose.Schema({
  nome: { type: String, required: true },
  genero: { type: String, required: true },
  duracao: { type: Number, required: true },
  trailer: { type: String },
  faixa: { type: Number, required: true },
  dataCriacao: {type: Date , Default: Date.now}
});

const Filme = mongoose.model("filmes", filmeModel);

module.exports = Filme;
