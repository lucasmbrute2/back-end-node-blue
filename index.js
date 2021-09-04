const express = require("express");
const app = express();
app.use(express.json());
const Connect = require("./connect/connect");

Connect();
const port = 3000;
app.get("/", (req,res)=>{
  res.send("<h1>Hello</h1>")
})
const Filmerota = require("./routes/filmes.routes");
app.use("/filmes", Filmerota);
app.listen(port, () => {
  console.info(`Servidor rodando em http://localhost:${port}`);
});
