if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();

}

const express = require("express");
const corsOptions = {
  origin: 'http://localhost:3000/',
  optionSucessStatus: 200 
}
const cors = require("cors");
const app = express();
const port = 3000;
const Connect = require("./connect/connect");
const db_url = process.env.DB_URL
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS
const db_data = process.env.DB_DATA

app.use(cors(corsOptions))
app.use(express.json());
Connect(db_url,db_user,db_pass,db_data);




const Filmerota = require("./routes/filmes.routes");


app.use("/filmes", Filmerota);
app.listen(process.env.PORT || port, () => {
  console.info(`Servidor rodando em http://localhost:${port}`);
});

module.exports = Connect;