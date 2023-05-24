// const pokemonCreate = require("../controllers/pokemonCreate");
const { Pokemons, Type} = require("../db");



//!4
const createNewHandler = async (req, res) => {
  try {
    const {
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
      img,
    } = req.body;
    const nuevoPoke = await Pokemons.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });
    let tiposDesdeDb = await Type.findAll({
      where: { name: types },
    });
    nuevoPoke.addTypes(tiposDesdeDb);
    res.status(201).send("Pokemon Creado Exitosamente");
    return nuevoPoke;
  } catch (err) {
    res.status(400).send(err);
  }
};


module.exports = createNewHandler;

// try {
//   const { id, name, img, types, hp, attack, defense } = req.body;
//   const response = await pokemonCreate(
//     id,
//     name,
//     img,
//     types,
//     hp,
//     attack,
//     defense
//   );
//   res.status(200).json(response);
// } catch (error) {
//   res.status(500).json({ error: error.message });
// }