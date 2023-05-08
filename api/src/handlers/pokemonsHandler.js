const getAllHandler = (req, res) => {
  res.status(200).send("Aqui estan todos los pokemons");
};
const getOneHandler = (req, res) => {
  res.status(200).send("Detalle de id pokemon");
};
const getNameHandler = (req, res) => {
  res.status(200).send(" Detalle x pokemon");
};
const createNewHandler = (req, res) => {
  res.status(200).send("Nuevo pokemon creado");
};

module.exports = {
  getAllHandler,
  getOneHandler,
  getNameHandler,
  createNewHandler,
};
