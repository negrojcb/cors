const express = require("express");
const route = express.Router();
const fetchCharacters = require("../utils/fetchChracters");

route.get("/", async (req, res) => {
  const data = await fetchCharacters();
  res.json(data);
});

route.get("/:name", async (req, res) => {
  //   const queryname = req.query.nombre;
  //   console.log(queryname);
  const name = req.params.name;
  const data = await fetchCharacters(name);
  res.json(data);
});

module.exports = route;
