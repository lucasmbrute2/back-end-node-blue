const express = require("express");
const router = express.Router();
const Filme = require("../model/model");


router.get("/", async (req, res) => {
  await Filme.find({})
    .then((filme) => res.send(filme))
    .catch((err) => console.error(err));
});

router.get("/filme/:id", async (req, res) => {
  await Filme.find({ _id: req.params.id })
    .then((filme) => res.status(200).send(filme))
    .catch((err) => res.status(400).send("Algo deu errado!"));
});


router.post("/add", async (req, res) => {
  await Filme.create(req.body)
    .then(() => {
      res.status(200).send("Música adicionada com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Algo deu errado, tente novamente.");
    });
});

router.put("/update/:id", async (req, res) => {
  await Filme.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.status(200).send("Filme atualizado com sucesso!"))
    .catch((err) => res.status(400).send("Algo deu errado"));
});

router.delete("/delete/:id", async (req,res) =>{
  await Filme.deleteOne({_id: req.params.id})
  .then(()=>res.status(200).send('Filme deletado com sucesso!'))
  .catch(()=>res.status(400).send('Algo deu errado.'))
})
module.exports = router;
