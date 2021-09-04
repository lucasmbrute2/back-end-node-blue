const mongoose = require("mongoose");

const Connect = () => {
  mongoose
    .connect("mongodb+srv://lucasmbrute2:lu280500@cluster0.dkgdi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));
};

module.exports = Connect;
